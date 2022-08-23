import { View, FlatList } from "react-native";
import DogBreedItem from "../components/DogBreedItem";

export default function DogBreedList({ navigation, route }) {
  const dogs = route.params.dogs;
  return (
    <View>
      <FlatList
        data={dogs}
        renderItem={({ item }) => (
          <DogBreedItem breed={item} navigation={navigation} />
        )}
      />
    </View>
  );
}
