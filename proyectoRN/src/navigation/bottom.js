import React from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text} from 'react-native'
import {ScreenHome} from '../screen/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  

export const BottomNavigation = () =>{
return(
    <Tab.Navigator initialRouteName='Home'
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home': 'home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
       

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={ScreenHome}options={{   TabBarIcon: ({color}) => (
        <TabBarIcon name="user" color={color}/>
         ),headerShown: false  }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
         TabBarIcon: ({color}) => (
        <TabBarIcon name="user" color={color}/>
         ),
      }}/>

    </Tab.Navigator>

)

}

function TabBarIcon({name, color}) {
    return(
        <Icon size={30} style={{marginBottom: -3}} name={name} color={color}/>
    );
}



