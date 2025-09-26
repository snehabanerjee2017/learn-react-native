import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
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
        <Text numberOfLines={1} onPress={handlePress}>I am writing to apply for the Doctoral Research Associate position in Generative Multimodal Recommender Systems at TUM Campus Heilbronn. With a Master’s degree in Media Informatics from RWTH Aachen, research experience at Fraunhofer IAIS and IPA, peer-reviewed publications, and several self-initiated projects in recommender systems and large language models, I am eager to contribute to advancing state-of-the-art multimodal, sequential, and generative approaches to recommender systems in close collaboration with Audi.</Text>
        <StatusBar style="auto" />
        <TouchableHighlight onPress={() => console.log("Image Clicked")}> 
          <Image 
            blurRadius={5}
            fadeDuration={1000}
            source={{
              width: 200,
              height:300,
              uri: "https://picsum.photos/200/300"
            }}
          /> 
        </TouchableHighlight>
        
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
