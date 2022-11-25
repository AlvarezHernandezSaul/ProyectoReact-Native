
import * as React from 'react';
import {welcomeScreen} from '../screen/welcome'
import { View, Text } from 'react-native';
import {BottomNavigation} from './bottom'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export const Navigation = () =>  {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome'> 
        <Stack.Screen name="welcome" component={welcomeScreen} options={{ headerShown: false  }} />
        <Stack.Screen name="Root" component={BottomNavigation}  options={{ headerShown: false,title: 'home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

