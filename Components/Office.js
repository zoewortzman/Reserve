import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import PeoplePage from './People';
import App from './App'

function OfficePage ({ navigation }) {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Welcome to the Office!</Text>
    
        <Button
        title="Go see your coworkers"
        onPress={() =>
        navigation.navigate("PeoplePage")
      }/>
      </View>
    );
  }

export default OfficePage;