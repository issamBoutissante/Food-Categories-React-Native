import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { MEALS } from "../../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../HeaderButton/HeaderButton";

const MealDetailScreen = (props) => {
  let mealId = props.navigation.getParam("mealId");
  console.log(mealId);
  let selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const renderIngredients = selectedMeal.ingredients.map((ing) => (
    <Text key={ing} style={styles.textStyle}>
      {ing}
    </Text>
  ));
  const renderSteps = selectedMeal.steps.map((step) => (
    <Text key={step} style={styles.textStyle}>
      {step}
    </Text>
  ));
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={styles.detailContainer}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity}</Text>
        <Text>{selectedMeal.affordability}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {renderIngredients}
      <Text style={styles.title}>Steps</Text>
      {renderSteps}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    height: 50,
    alignItems: "center",
  },
  imageContainer: {
    height: "30%",
  },
  title: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  textStyle: {
    borderWidth: 1,
    margin: 15,
    padding: 10,
    borderRadius: 4,
  },
});
MealDetailScreen.navigationOptions = (nav) => {
  let mealId = nav.navigation.getParam("mealId");
  console.log(mealId);
  let selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("hello")}
        />
      </HeaderButtons>
    ),
  };
};
export default MealDetailScreen;
