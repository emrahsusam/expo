import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'


const Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen 
        name="index"
        options={{
            tabBarLabel: 'Index',
        }} />
         <Tabs.Screen 
        name="explore"
        options={{
            tabBarLabel: 'Explore',
        }} />

<Tabs.Screen 
        name="explore"
        options={{
            tabBarLabel: 'Wishlist',
        }} />
    </Tabs>
  )
}

export default Layout