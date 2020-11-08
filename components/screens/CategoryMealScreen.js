import React, { useRef } from "react";
import { FlatList, View, Text, StyleSheet, Button, _Text } from "react-native";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import MealList from "./mealList/MealList";

const CategoryMealScreen = (props) => {
  let categoryId = props.navigation.getParam("CategoryId");
  let selectedMealCategories = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );
  return (
    <MealList navigation={props.navigation} list={selectedMealCategories} />
  );
};
CategoryMealScreen.navigationOptions = (navigationData) => {
  const selectedCategoryId = navigationData.navigation.getParam("CategoryId");
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === selectedCategoryId
  );
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealScreen;
