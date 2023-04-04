import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Movie from './src/screens/Movie'
import Details from './src/screens/Details'

const Stack = createStackNavigator()

const App =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name ="Movie" component ={Movie}/>
        <Stack.Screen name ="Detail" component ={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App