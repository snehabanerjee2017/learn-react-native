import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, Alert, Platform, Dimensions} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import { use } from 'react';


export default function App() { 
  let x = 1;
  console.log(useDeviceOrientation());

  let landscape = false;
  if(useDeviceOrientation()==="landscape") landscape = true;
  else landscape = false;

  const handlePress = () => {
    console.log("Text Clicked");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: "100%",
            height: landscape ? "100%" : "30%",
        }}></View>   
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

// Physical Pixels = Density-independent Pixels(DIPs) * Scale Factor