import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function RandomDog() {
  const [randomDog, setRandomDog] = useState();
  const [dogName, setDogName] = useState();
  const [showBreed, setShowBreed] = useState(false);

  const getRandomDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setRandomDog(data.message))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getRandomDog();
  }, []);

  useEffect(() => {
    getDogBreed();
    setShowBreed(false);
  }, [randomDog]);

  const getDogBreed = () => {
    const breedRegex = /[a-zA-Z]+/;
    const subBreedRegex = /[a-zA-Z]+-[a-zA-Z]+/;
    const dog = randomDog?.slice(30);
    const breed = dog?.match(breedRegex);
    const subBreed = dog?.match(subBreedRegex);
    if (!subBreed) {
      setDogName(breed);
    } else {
      setDogName(subBreed);
    }
  };
  const handleShowBreed = () => {
    setShowBreed(!showBreed);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Guess the random dog breed!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            width: 300,
            height: 300,
            uri: randomDog,
          }}
        />
      </View>
      <View>
        <View style={styles.button}>
          <Button title="New Random Dog" onPress={getRandomDog} />
        </View>
        <View>
          <Button title="Show breed" onPress={handleShowBreed} />
        </View>
      </View>
      {showBreed && (
        <Text style={styles.text}>
          {dogName[0][0].toUpperCase() + dogName[0].substring(1)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    // flex: 3,
    fontSize: 30,
    paddingTop: 20,
    marginBottom: 10,
  },
  imageContainer: {
    // height: 500,
    // flex: 2,
  },
  image: {
    resizeMode: "contain",
  },
  text: {
    paddingTop: 25,
    fontSize: 30,
  },
  buttonContainer: {
    // flex: 1,
  },
  button: {
    margin: 20,
  },
});
