import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from './Javascript/Screen01'
import Screen02 from './Javascript/Screen02'
import Screen03 from './Javascript/Screen03'
import Master from './Javascript/Master_Portrait'

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Master">
        <Stack.Screen name="Screen01" component={Screen01} />
        <Stack.Screen name="Screen02" component={Screen02} />
        <Stack.Screen name="Screen03" component={Screen03} />
        <Stack.Screen name="Master" component={Master} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;