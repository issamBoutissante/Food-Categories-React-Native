import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const CategoryGridItem = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.gridItem, backgroundColor: props.Data.item.color }}
      onPress={() =>
        props.navigation.navigate("CategoryMeal", {
          CategoryId: props.Data.item.id,
        })
      }
    >
      <View>
        <Text style={styles.title}>{props.Data.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 12,
    padding: 15,
    height: 150,
    borderRadius: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    elevation: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
});

export default CategoryGridItem;
