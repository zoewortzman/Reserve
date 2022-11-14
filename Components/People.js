import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import OfficePage from './Office';

function PeoplePage ({ navigation }) {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Coworkers...</Text>
    
        <Button
        title="Back to Office"
        onPress={() =>
        navigation.push("OfficePage")
      }/>
      </View>
    );
  }

export default PeoplePage;