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
      flexWrap: "wrap",
      alignContent: "center", // has no effect if flexWrap is not set to wrap
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        flexBasis: 100, // maps to primary axis, so width if flexDirection is row
        flexGrow: 1, // takes up all the available space in the primary axis, same result as flex property
        
        width:100,
        height:300,
        // alignSelf: "flex-start",
        // flex:1
      }}/>
      <View style={{
        backgroundColor: "gold",
        width:100,
        height:200,
        // flex:1
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width:100,
        height:100,
        // flex:1
      }}/>
      <View style={{
        backgroundColor: "grey",
        width:100,
        height:100,
        // flex:1
      }}/>
      <View style={{
        backgroundColor: "greenyellow",
        width:100,
        height:100,
        // flex:1
      }}/>
    </View>
    
  );
}


// Physical Pixels = Density-independent Pixels(DIPs) * Scale Factor