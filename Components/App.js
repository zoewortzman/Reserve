//import React from 'react';
import * as React from 'react';
import { Text, View, Button } from 'react-native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OfficePage from './Office';
import PeoplePage from './People';

const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="OfficePage">
        <Tab.Screen name="Office" component={OfficePage} />
        <Tab.Screen name="People" component={PeoplePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;