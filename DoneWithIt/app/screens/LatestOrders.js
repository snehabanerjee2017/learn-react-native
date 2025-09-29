import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

// Dictionary mapping Instagram URLs to thumbnail paths
const posts = {
  "https://www.instagram.com/reel/DPEdGEVDSJU/": require("../assets/DPEdGEVDSJU.png"),
  "https://www.instagram.com/reel/DO8vcdUDUrI/": require("../assets/DO8vcdUDUrI.png"),
  "https://www.instagram.com/reel/DOycYmiDY2_/": require("../assets/DOycYmiDY2_.png"),
  "https://www.instagram.com/reel/DOq4H_fjR7X/": require("../assets/DOq4H_fjR7X.png"),
  "https://www.instagram.com/reel/DOgZQblDRBV/": require("../assets/DOgZQblDRBV.png"),
  "https://www.instagram.com/p/DOYsLZYDaU7/": require("../assets/DOYsLZYDaU7.png"),
  "https://www.instagram.com/reel/DOL2M2fDQzI/": require("../assets/DOL2M2fDQzI.png"),
  "https://www.instagram.com/reel/DOGryoRDYK6/": require("../assets/DOGryoRDYK6.png"),
  "https://www.instagram.com/reel/DNyE0tkWtCw/": require("../assets/DNyE0tkWtCw.png"),
  "https://www.instagram.com/reel/DNs9rLPWjsL/": require("../assets/DNs9rLPWjsL.png"),
  "https://www.instagram.com/reel/DNnweUhxePV/": require("../assets/DNnweUhxePV.png"),
  "https://www.instagram.com/reel/DNVuVrFxRin/": require("../assets/DNVuVrFxRin.png"),
};

function LatestOrders() {
  const [selectedPost, setSelectedPost] = useState(null);

  const renderThumbnail = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setSelectedPost(item.url)}
    >
      <Image source={item.thumbnail} style={styles.thumbnail} />
    </TouchableOpacity>
  );

  const postArray = Object.keys(posts).map((key) => ({
    url: key,
    thumbnail: posts[key],
  }));

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        {selectedPost ? (
          <View style={{ flex: 1 }}>
            {/* Back Button */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setSelectedPost(null)}
            >
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>

            {/* WebView */}
            <WebView
              source={{ uri: selectedPost }}
              style={styles.webview}
              startInLoadingState
              javaScriptEnabled
              domStorageEnabled
            />
          </View>
        ) : (
          <FlatList
            data={postArray}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={renderThumbnail}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  item: {
    margin: 10,
    width: (width / 2) - 20,
    height: 200,
  },
  thumbnail: {
    flex: 1,
    borderRadius: 10,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  webview: {
    flex: 1,
  },
  backButton: {
    padding: 10,
    backgroundColor: "#000",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default LatestOrders;
