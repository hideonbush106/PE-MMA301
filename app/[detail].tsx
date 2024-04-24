import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import { data, IOrchid } from '@/data'
export default function DetailPage() {
  const { detail } = useLocalSearchParams()
  const detailData = data.find((value) => value.name === detail)

  const [favoriteList, setFavoriteList] = useState<IOrchid[]>([])
  const isFocused = useIsFocused()
  const getItem = async () => {
    try {
      const result = await AsyncStorage.getItem('favorite')
      return result === null ? [] : JSON.parse(result)
    } catch (e) {
      console.log(e)
      return null
    }
  }

  const isInFavoriteList = (orchidName: string) => {
    try {
      return (
        favoriteList.findIndex((orchid) => {
          return orchid.name === orchidName
        }) !== -1
      )
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const handleFavoriteList = async (item: IOrchid) => {
    try {
      if (isInFavoriteList(item.name)) {
        Alert.alert('Delete confirmation', 'Are you sure you want to delete this orchid from favorite?', [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Delete',
            style: 'destructive',
            async onPress() {
              const updatedFavoriteOrchids = favoriteList.filter((orchid) => orchid.name !== item.name)
              await AsyncStorage.setItem('favorite', JSON.stringify(updatedFavoriteOrchids))
              setFavoriteList(updatedFavoriteOrchids)
            }
          }
        ])
      } else {
        setFavoriteList([...favoriteList, item])
        await AsyncStorage.setItem('favorite', JSON.stringify([...favoriteList, item]))
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    ;(async () => {
      try {
        const data = await getItem()
        setFavoriteList(data)
      } catch (error) {
        console.log(error)
      }
    })()
    return () => {}
  }, [isFocused])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: detailData?.image }} />
        <Text style={styles.heading}>{detailData?.name}</Text>
        <Pressable
          onPress={() => {
            if (detailData) handleFavoriteList(detailData)
          }}
          style={styles.favoriteGroup}
        >
          <FontAwesome
            style={styles.favorite}
            name={isInFavoriteList(detailData?.name || '') ? 'heart' : 'heart-o'}
            color='#9000ff'
          />
        </Pressable>
        <Text style={styles.detail}>
          Nature:{' '}
          {detailData?.isTopOfTheWeek ? (
            <MaterialCommunityIcons name='leaf' size={24} color='green' />
          ) : (
            <MaterialCommunityIcons name='leaf-off' size={24} color='green' />
          )}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={styles.detail}>Rating: </Text>
          {Array.from(Array(Math.round(Number(detailData?.rating))).keys()).map((value) => (
            <FontAwesome key={value} name='star' size={24} color='#ffbb00' />
          ))}
        </View>
        <Text style={styles.detail}>Category: {detailData?.category}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  imgContainer: {
    width: '100%'
  },
  img: {
    width: 'auto',
    height: 400
  },
  heading: {
    fontWeight: '700',
    fontSize: 35,
    margin: '5%'
  },
  detail: {
    fontSize: 20,
    marginLeft: '7%',
    marginTop: '2%'
  },
  favorite: {
    fontSize: 35,
    marginHorizontal: 20
  },
  favoriteGroup: { width: '20%', alignSelf: 'flex-start' }
})
