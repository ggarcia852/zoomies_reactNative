import React from "react";
import DogBreedItem from "../components/DogBreedItem";
import { View, FlatList } from "react-native";

export default function DogBreedList({ navigation, route }) {
  const dogs = route.params.dogs;
  return (
    <View style={styles.container}>
      <FlatList
        data={dogs}
        renderItem={({ item }) => (
          <DogBreedItem breed={item} navigation={navigation} />
        )}
      />
    </View>
  );
}
