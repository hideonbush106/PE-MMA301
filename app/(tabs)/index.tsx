/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, SectionList, StatusBar, StyleSheet, Text, View } from 'react-native'

import OrchidCard from '@/components/OrchidCard'
import { IOrchid, sectionList } from '@/data'

const HomeScreen = () => {
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
      const data = await getItem()
      setFavoriteList(data)
    })()
    return () => {}
  }, [isFocused])

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sectionList}
        contentContainerStyle={styles.list}
        renderSectionHeader={({ section: { name } }) => (
          <View>
            <Text style={styles.sectionHeader}>{name}</Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <OrchidCard
            onChangeFavList={() => handleFavoriteList(item)}
            favorite={isInFavoriteList(item.name)}
            image={item.image}
            name={item.name}
            key={index}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  list: {
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: -10
  },
  button: {
    width: '44%',
    marginHorizontal: '3%',
    marginVertical: '2%'
  },
  buttonGroup: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '2%'
  },
  sectionHeader: {
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 20
  }
})

export default HomeScreen
