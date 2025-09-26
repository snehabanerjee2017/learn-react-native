import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';


export default function App() { 
  return (
    <View style={{
      backgroundColor: "white",
      flex: 1,
      flexDirection: "column-reverse",
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        width:100,
        height:100,
        // flex:1
      }}/>
      <View style={{
        backgroundColor: "gold",
        width:100,
        height:100,
        // flex:1
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width:100,
        height:100,
        // flex:1
      }}/>
    </View>
    
  );
}


// Physical Pixels = Density-independent Pixels(DIPs) * Scale Factor