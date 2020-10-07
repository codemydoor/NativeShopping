import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

function Search() {
  return (
    <View>
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
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
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
