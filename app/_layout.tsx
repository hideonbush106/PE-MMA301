import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false, headerTitle: 'Back' }} />
        <Stack.Screen name='[detail]' options={{ headerTitle: 'Detail' }} />
      </Stack>
    </SafeAreaProvider>
  )
}

export default RootLayout
