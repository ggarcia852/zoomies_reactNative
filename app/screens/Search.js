import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, StyleSheet } from "react-native";
import DogBreedItem from "../components/DogBreedItem";

export default function Search(props) {
  const [text, setText] = useState("");
  const [dogList, setDogList] = useState([]);
  const dogs = props.route.params.dogs;

  useEffect(() => {
    if (text.length == 0) setDogList([]);
    if (text.length >= 1) {
      const newList = dogs.filter((dog) => dog[0].includes(text.toLowerCase()));
      setDogList(newList);
    }
  }, [text]);

  return (
    <View>
      <TextInput
        placeholder="Search dog breeds..."
        style={styles.input}
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <FlatList
        data={dogList}
        renderItem={({ item }) => (
          <DogBreedItem breed={item} navigation={props.navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 25,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "white",
    paddingLeft: 10,
  },
});
