import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DogBreedList from "../screens/DogBreedList";
import Home from "../screens/Home";
import RandomDog from "../screens/RandomDog";
import Search from "../screens/Search";
import SelectedDog from "../screens/SelectedDog";

export default function Navigator() {
  const [dogs, setDogs] = React.useState([]);
  
  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => setDogs(Object.entries(data.message)))
      .catch((e) => console.log(e));
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="DogBreedList"
          component={DogBreedList}
          initialParams={{ dogs }}
          options={{ title: "Dog Breeds" }}
        />
        <Stack.Screen
          name="SelectedDog"
          component={SelectedDog}
          options={{ title: "Selected Breed" }}
        />
        <Stack.Screen
          name="RandomDog"
          component={RandomDog}
          options={{ title: "Random Dog" }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          initialParams={{ dogs }}
          options={{ title: "Search Breeds" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
