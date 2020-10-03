import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Item from "./component/Item";
import ItemList from "./component/itemList";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <EvilIcons name="arrow-left" size={40} color="blue" />
        <Feather name="shopping-cart" size={24} color="black" />
      </View>
      <View style={styles.headerAndSearchContainer}>
        <Text style={styles.header}>Woman Jacket</Text>
        <TextInput
          placeholder="Search Jacket"
          placeholderTextColor="blue"
          style={styles.search}
        />
      </View>
      <ItemList />
      {/* <Star /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3E9FF",
    // alignItems: "center",
    // justifyContent: "center",
  },
  iconContainer: {
    flex: 10,
    flexDirection: "row",
    marginBottom: 20,
  },
  headerAndSearchContainer: {
    marginHorizontal: 30,
  },
  search: {
    height: 50,
    width: 320,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    paddingLeft: 20,
  },
  header: {
    marginVertical: 30,
  },
});
