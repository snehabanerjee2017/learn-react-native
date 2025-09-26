import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, Alert} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() { 
  let x = 1;
  console.log(require("./assets/favicon.png"));

  const handlePress = () => {
    console.log("Text Clicked");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <Button 
        color="orange"
        title='Click Me' 
        onPress={() => Alert.alert("My title", "My Message", [
          {text: "Yes", onPress: () => console.log("Yes Pressed")},
          {text: "No", onPress: () => console.log("No Pressed")}
        ])} />       
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
