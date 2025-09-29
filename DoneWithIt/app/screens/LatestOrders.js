import React from "react";
import { StyleSheet, Dimensions, FlatList, View, StatusBar, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get("window");

// List of Instagram post URLs
const posts = [
  "https://www.instagram.com/reel/DPEdGEVDSJU/",
  "https://www.instagram.com/reel/DO8vcdUDUrI/",
  "https://www.instagram.com/reel/DOycYmiDY2_/",
  "https://www.instagram.com/reel/DOq4H_fjR7X/",
  "https://www.instagram.com/reel/DOgZQblDRBV/",
];

function LatestOrders() {
  return (
    <SafeAreaProvider>
                        <SafeAreaView style={styles.container} edges={['top']}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <FlatList
                                  data={posts}
                                  keyExtractor={(item, index) => index.toString()}
                                  numColumns={2}
                                  renderItem={({ item }) => (
                                    <View style={styles.item}>
                                      <WebView
                                        source={{ uri: item }}
                                        style={styles.webview}
                                        startInLoadingState
                                        javaScriptEnabled
                                        domStorageEnabled
                                      />
                                    </View>
                                  )}
                                />
                            </ScrollView>
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
    flex: 1,
    margin: 20,
    height: 200, // Adjust height for better viewing
  },
  webview: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default LatestOrders;
