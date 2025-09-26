import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, Alert, Platform, Dimensions} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() { 
  let x = 1;
  console.log(Dimensions.get("screen")) ;

  const handlePress = () => {
    console.log("Text Clicked");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: "50%",
            height: 70,
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