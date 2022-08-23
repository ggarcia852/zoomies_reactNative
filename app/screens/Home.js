import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

export default function Home({ navigation }) {
  const imgSource = {
    width: 20,
    height: 20,
    uri: "https://www.nicepng.com/png/detail/10-103218_png-freeuse-download-pets-paws-svg-png-icon.png",
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Zoomies</Text>
          <Image
            style={styles.pawImage}
            source={{
              width: 50,
              height: 50,
              uri: "https://www.nicepng.com/png/detail/10-103218_png-freeuse-download-pets-paws-svg-png-icon.png",
            }}
          />
        </View>
        <Text style={styles.subHeading}>
          Where all your wildest doggo dreams come true!
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.dogImage}
          source={{
            uri: "https://miro.medium.com/max/580/1*tKM7HOZ4JUoMZMRLP3XbzA.png",
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("DogBreedList")}
        >
          <Image source={imgSource} />
          <Text style={styles.text}>View Dog Breeds</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("RandomDog")}
        >
          <Image source={imgSource} />
          <Text style={styles.text}>Random Dog</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Search")}
        >
          <Image source={imgSource} />
          <Text style={styles.text}>Search Breeds</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontSize: 80,
    fontWeight: "bold",
    letterSpacing: 1,
    marginRight: 5,
  },
  subHeading: {
    fontSize: 15,
  },
  imageContainer: {
    flex: 2,
  },
  dogImage: {
    flex: 1,
    resizeMode: "contain",
  },
  pawImage: {
    resizeMode: "contain",
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "flex-end",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  text: {
    backgroundColor: "white",
    fontSize: 30,
    textAlign: "center",
    lineHeight: 70,
    letterSpacing: 1,
  },
});
