import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export interface IOrchidCard {
  name: string
  image: string
  favorite: boolean
  onChangeFavList: () => void
}

const OrchidCard = ({ name, image, favorite, onChangeFavList }: IOrchidCard) => {
  return (
    <View style={styles.item}>
      <Link href={`/${name}`} asChild>
        <Pressable>
          <Image
            source={{
              uri: image
            }}
            style={styles.img}
          />
          <Text style={styles.heading}>{name}</Text>
          <Pressable onPress={onChangeFavList} style={styles.favoriteGroup}>
            <FontAwesome style={styles.favorite} name={favorite ? 'heart' : 'heart-o'} color='#9000ff' />
          </Pressable>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    width: '95%',
    margin: '2.4%',
    borderRadius: 7,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    justifyContent: 'space-between'
  },
  heading: {
    fontWeight: '700',
    fontSize: 19,
    textAlign: 'center',
    marginVertical: '3%'
  },
  img: {
    width: 'auto',
    height: 200,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7
  },
  favorite: {
    fontSize: 35,
    margin: 20
  },
  favoriteGroup: { width: '25%', alignSelf: 'flex-start' }
})

export default OrchidCard
