import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DogBreedItem({ breed, navigation }) {
  const [dogImage, setDogImage] = useState();
  const dogBreed = breed[0];
  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images`)
      .then((response) => response.json())
      .then((data) => setDogImage(data.message[0]))
      .catch((e) => console.log(e));
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={{
          width: 20,
          height: 20,
          uri: "https://www.nicepng.com/png/detail/10-103218_png-freeuse-download-pets-paws-svg-png-icon.png",
        }}
      />
      <Text
        style={styles.item}
        onPress={() => navigation.navigate("SelectedDog", { dogBreed })}
      >
        {dogBreed[0].toUpperCase() + dogBreed.substring(1)}
      </Text>
      <Image
        source={{
          width: 30,
          height: 30,
          uri: dogImage,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  item: {
    fontSize: 40,
    color: "black",
    marginRight: 10,
    marginLeft: 10,
  },
});
