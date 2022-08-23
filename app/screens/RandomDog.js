import { useState, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function RandomDog() {
  const [randomDog, setRandomDog] = useState();
  const [dogName, setDogName] = useState();
  const [showBreed, setShowBreed] = useState(false);

  useEffect(() => {
    getRandomDog();
  }, []);

  useEffect(() => {
    getDogBreed();
    setShowBreed(false);
  }, [randomDog]);

  const getRandomDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setRandomDog(data.message))
      .catch((e) => console.log(e));
  };

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
      <Text style={styles.heading}>What breed am I?</Text>
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
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="New Random Dog" onPress={getRandomDog} />
        </View>
        <View>
          <Button title="Show breed" onPress={handleShowBreed} />
        </View>
        {showBreed && (
          <Text style={styles.text}>
            {dogName[0][0].toUpperCase() + dogName[0].substring(1)}
          </Text>
        )}
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
    fontSize: 30,
    paddingTop: 20,
    marginBottom: 10,
  },
  imageContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    paddingTop: 15,
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    width: "60%",
  },
  button: {
    marginBottom: 20,
  },
});
