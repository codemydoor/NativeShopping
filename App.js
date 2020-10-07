import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import ItemList from "./component/itemList";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Checkout from "./component/Checkout";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.arrow}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={styles.arrows}
          />
        </View>
        <View style={styles.cart}>
          <Feather
            name="shopping-cart"
            size={20}
            color="blue"
            style={styles.carts}
          />
        </View>
      </View>
      <View style={styles.headerAndSearchContainer}>
        <Text style={styles.header}>Woman Jacket</Text>
        <TextInput
          placeholder="Search Jacket"
          placeholderTextColor="gray"
          style={styles.search}
        />
      </View>
      <ItemList />
      {/* <Checkout /> */}

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
    marginBottom: 10,
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
    fontSize: 23,
    fontWeight: "bold",
  },
  arrow: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    marginHorizontal: 25,
  },
  arrows: {
    alignSelf: "center",
    marginTop: 5,
  },
  cart: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    marginHorizontal: 210,
  },
  carts: {
    alignSelf: "center",
    marginTop: 8,
  },
});
