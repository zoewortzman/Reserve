import { DefaultTheme } from "@react-navigation/native";
import React from "react";

import { Text, View, Button } from 'react-native';



function ConferenceRoom({position: {x:top,y:left}, handler}) {
    return (
        <View style={{
            borderRadius: 1000,
            backgroundColor: "red",
            position: "absolute",
            top,
            left,
        }}>

            <Button title="Conference Room" onPress={handler}>

            </Button>

        </View>
        
    );
}
function DeskBlob() {
    return (<Button></Button>);
}
function Landmark() {
    return (
        <Button></Button>
    );
}

export {ConferenceRoom, DeskBlob, Landmark};