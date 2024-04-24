import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#9000ff'
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name='home' color={color} />
          }}
        />
        <Tabs.Screen
          name='favorite'
          options={{
            title: 'Favorite',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name='heart' color={color} />
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
