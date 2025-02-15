import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar'


const _layout = () => {
  return (
    <Tabs
        tabBar={props=> <TabBar {...props} />}
    >
        <Tabs.Screen
        name="index"
        options={{
            title: "Home"
        }}
    />

        <Tabs.Screen
        name="create"
        options={{
            title: "Order"
        }}
    />
       <Tabs.Screen
        name="explore"
        options={{
            title: "Stocks"
        }}
    />
       <Tabs.Screen
        name="profile"
        options={{
            title: "Customer Service"
        }}
    />

    </Tabs>
  )
}

export default _layout