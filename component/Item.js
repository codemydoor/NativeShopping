import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import jacket from "../assets/jacket.png";

function Item({ itemName, price, rating, image }) {
  return (
    <View style={styles.parentContainter}>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.itemDescriptionContainer}>
          <Text style={styles.itemName}>{itemName}</Text>
          <Text>
            <FontAwesome name="star-o" size={24} color="black" />
          </Text>
          <Text style={styles.price}>{price} </Text>
        </View>
      </View>
    </View>
  );
}
export default Item;

const styles = StyleSheet.create({
  item: {
    width: 130,
    height: 120,

    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    transform: [{ skewY: "8deg" }],
    backgroundColor: "white",
    marginHorizontal: 30,
    marginVertical: 50,
  },
  image: {
    height: 115,
    width: 90,
    position: "absolute",
    bottom: 35,
    alignSelf: "center",
  },
  itemContainer: {
    flexDirection: "row",
  },
  itemDescriptionContainer: {
    marginVertical: 70,
    position: "absolute",
    left: 150,
    marginHorizontal: 30,
  },
  itemName: {
    fontSize: 13,
    fontWeight: "bold",
  },
  price: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
  },
});
