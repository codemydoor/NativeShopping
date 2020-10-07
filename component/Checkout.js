import React from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import image from "../assets/jacket.png";
import { Rating } from "react-native-ratings";
function Checkout() {
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

      <View style={styles.item}>
        <View style={styles.heart}>
          <AntDesign
            name="hearto"
            size={24}
            color="#9296F0"
            style={styles.carts}
          />
        </View>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.elementContainer}>
        <Text style={styles.itemName}>Red Woman Jacket</Text>
        <Text style={styles.rating}>
          Review :
          <Rating type="star" ratingCount={5} imageSize={9} startingValue={4} />
        </Text>
        <View style={styles.underline}></View>
        <Text>
          It is a more established fact that readers will be distracted by the
          readable content of a page
        </Text>
        <View style={styles.itemDescription}>
          <Text style={styles.itemDescriptionText}>
            Material: 91% polyster, 9% elastane
          </Text>
        </View>
        <View style={styles.sizeContainer}>
          <View style={styles.sizes}>
            <Text style={styles.sizeType}>XS</Text>
          </View>
          <View style={styles.sizes}>
            <Text style={styles.sizeType}>S</Text>
          </View>
          <View style={styles.sizes}>
            <Text style={styles.sizeType} nativeID={"some"}>
              M
            </Text>
          </View>
          <View style={styles.sizes}>
            <Text style={styles.sizeType}>L</Text>
          </View>
          <View style={styles.sizes}>
            <Text style={styles.sizeType}>XL</Text>
          </View>
        </View>
        <View style={styles.total}>
          <View style={styles.textContainer}>
            <Text style={styles.amountText}>Total Amount</Text>
            <Text style={styles.amount}>$ 100</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.cartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Checkout;

const styles = StyleSheet.create({
  iconContainer: {
    flex: 10,
    flexDirection: "row",
    marginTop: 20,
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
  heart: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    position: "relative",
    left: 280,
    bottom: 10,
  },
  item: {
    width: 310,
    height: 300,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    transform: [{ skewY: "4deg" }],
    backgroundColor: "white",
    marginHorizontal: 30,
    marginVertical: 50,
  },
  image: {
    height: 290,
    width: 300,
    position: "absolute",
    bottom: 35,
    alignSelf: "center",
  },
  itemName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  elementContainer: {
    position: "relative",
    bottom: 20,
    marginHorizontal: 40,
  },
  underline: {
    height: 3,
    width: 40,
    backgroundColor: "blue",
    borderRadius: 3,
    marginVertical: 20,
  },
  itemDescription: {
    backgroundColor: "white",
    height: 45,
    width: 375,
    position: "relative",
    right: 41,
    marginTop: 20,
  },
  rating: {
    marginTop: 10,
  },
  itemDescriptionText: {
    color: "blue",
    marginVertical: 13,
    marginHorizontal: 40,
  },
  sizeContainer: {
    flexDirection: "row",
  },
  sizes: {
    height: 35,
    width: 35,
    backgroundColor: "white",
    borderRadius: 5,
    margin: 10,
    marginVertical: 20,
  },
  sizeType: {
    alignSelf: "center",
    marginVertical: 7,
  },
  total: {
    height: 60,
    width: 300,
    backgroundColor: "#9296F0",
    borderRadius: 10,
    flexDirection: "row",
  },
  amountText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 3,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  amount: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  addButton: {
    height: 35,
    width: 100,
    backgroundColor: "#4F1BDB",
    marginHorizontal: 15,
    marginVertical: 12,
    borderRadius: 5,
  },
  cartText: {
    color: "white",
    alignSelf: "center",
    marginVertical: 6,
    fontWeight: "bold",
  },
});
