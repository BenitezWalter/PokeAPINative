import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, Image, FlatList } from "react-native";
import { TextInput } from "react-native-web";
import { StatusBar } from "expo-status-bar";

export default function PokemonListScreen() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  }, []);
  const renderItem = ({ item, index }) => {
    return (
      <View style={stylesCard.container}>
        <View style={stylesCard.imageContainer}>
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`,
            }}
            style={stylesCard.image}
          />
        </View>
        <Text style={stylesCard.name}>{item.name.toUpperCase()}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerForm}>
            <View style={styles.formGroup}>
              <TextInput style={styles.input}></TextInput>
            </View>
            <Button title="Buscar"></Button>
          </View>
        </View>
        <StatusBar style="auto" />
        <FlatList data={data} renderItem={renderItem} numColumns={4}></FlatList>
      </View>
    </>
  );
}
const stylesCard = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 5,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    borderTopWidth: 3,
    borderTopColor: "rgba(0, 0, 0, 0.2)",
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: 250,
    width: 250,
  },
  name: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
});

const styles = StyleSheet.create({
  container: {
    maxWidth: 1200,
    marginHorizontal: "auto",
    height:'100%'
  },
  header: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerForm: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    flexDirection: "row",
  },
  formGroup: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    border: "1px solid",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
  },
  input: {
    width: 300,
    height: 20,
    stroke: "#555",
  },
  card: {
    border: "1px solid",
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 20,
  },
  nameText: {
    fontFamily: "monospace",
    fontSize: 20,
    textAlign: "center",
    color: "#f12f12f12",
    paddingTop: 10,
  },
});
