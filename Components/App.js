import React from 'react';
import { Text, TextInput, View, Image } from 'react-native';

const Welcome = () => {
  return (
    <View 
      style={{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        fontSize:10,
      }}>
      <Image 
        source={{
          uri:
          'https://reactnative.dev/docs/assets/p_cat2.png'
        }}
        style={{
          width:200,
          height:200,

        }}
        />
      <Text>Enter your name below</Text>
      <TextInput 
        style={{
          height:50,
          width:200,
          borderColor:'navy',
          borderWidth: 1
        }}
        />
    </View>
  )
}
export default Welcome;
