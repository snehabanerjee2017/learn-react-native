import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';


export default function App() { 
  return (
    <View style={{
      backgroundColor: "white",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center", // main axis
      alignItems: "center", // secondary axis 
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        
        width:100,
        height:100,
      }}/>
      <View style={{
        backgroundColor: "gold",
        width:100,
        height:100,
        top: 20,
        left: 20,
        position: "absolute",
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width:100,
        height:100,
      }}/>
    </View>
    
  );
}


// Physical Pixels = Density-independent Pixels(DIPs) * Scale Factor