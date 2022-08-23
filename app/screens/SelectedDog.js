import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

export default function SelectedDog({ route }) {
  const [dogImages, setDogImages] = useState();
  const [image, setImage] = useState();
  const { dogBreed } = route.params;

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images`)
      .then((response) => response.json())
      .then((data) => {
        setDogImages(data.message), setImage(data.message[0]);
      })
      .catch((e) => console.log(e));
  }, []);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const newImage = () => {
    const listLength = dogImages.length || 0;
    const random = getRandomInt(listLength);
    const dogs = dogImages;
    setImage(dogs[random]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {dogBreed[0].toUpperCase() + dogBreed.substring(1)}
      </Text>
      <View>
        {image && (
          <Image
            style={styles.image}
            source={{
              width: 400,
              height: 400,
              uri: image,
            }}
          />
        )}
        <Button title={"Show me more!"} onPress={newImage}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    marginBottom: 10,
  },
  image: {
    resizeMode: "contain",
    marginBottom: 20,
  },
});
