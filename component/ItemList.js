import React from "react";
import { FlatList, View, Text } from "react-native";
import Item from "./Item";
import { FontAwesome } from "@expo/vector-icons";
const star = <FontAwesome name="star-o" size={24} color="black" />;

function ItemList() {
  const item = [
    {
      itemName: "Red Bike Jackets",
      rating: "5",
      price: "$ 100",
      key: "1",
      image: require("../assets/jacket.png"),
    },
    {
      itemName: "Hoody Jackets",
      rating: "rating",
      price: "$ 100",
      key: "2",
      image: require("../assets/yellow.png"),
    },
    {
      itemName: "Snow Jackets",
      rating: "5",
      price: "$ 100",
      key: "3",
      image: require("../assets/jacket3.png"),
    },
    {
      itemName: "Sports Jackets",
      rating: "5",
      price: "$ 100",
      key: "4",
      image: require("../assets/jacket2.png"),
    },
  ];
  return (
    <View>
      <FlatList
        data={item}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <View>
              <Item
                itemName={item.itemName}
                rating={item.rating}
                image={item.image}
                price={item.price}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
export default ItemList;
