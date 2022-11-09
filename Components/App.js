//import React from 'react';
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OfficePage from './Office';
import PeoplePage from './People';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to the Office"
        onPress={() => navigation.navigate("OfficePage")}
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OfficePage" component={OfficePage} />
        <Stack.Screen name="PeoplePage" component={PeoplePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;