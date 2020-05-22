import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import Home from './Home'
import Shake from './Shake'
import Opacity from './Opacity'
import ScaleCard from './ScaleCard'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Animation Examples' }}
        />
        <Stack.Screen name='Shake' component={Shake} />
        <Stack.Screen
          name='Scale'
          component={ScaleCard}
          options={{ title: 'Card Animation' }}
        />
        <Stack.Screen name='Opacity' component={Opacity} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
