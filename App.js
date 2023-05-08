import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokemonListScreen from "./screens/PokemonListScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PokemonList"
          component={PokemonListScreen}
          options={{ title: "Pokedex" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
