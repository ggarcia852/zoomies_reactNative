import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CameraPermission from "../components/CameraPermission";

export default function UploadDog() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Feature coming soon!</Text>
      <View style={styles.cameraContainer}>
        <CameraPermission />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    flex: 1,
    paddingTop: 25,
    fontSize: 25,
  },
  cameraContainer: {
    // flex: 4,
  },
});
