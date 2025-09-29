import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";


function LatestOrders(props) {
  return (
    <WebView
      source={{ uri: "https://www.instagram.com/reel/DPEdGEVDSJU/?utm_source=ig_embed&amp;utm_campaign=loading" }}
      style={styles.webview}
      startInLoadingState
      javaScriptEnabled
      domStorageEnabled
    />
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default LatestOrders;