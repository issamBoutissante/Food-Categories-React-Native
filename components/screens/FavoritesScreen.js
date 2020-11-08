import React from "react";
import MealList from "./mealList/MealList";
import { MEALS } from "../../data/dummy-data";
import HeaderButton from "../HeaderButton/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FavoritesScreen = (props) => {
  const favoriteMeals = MEALS.filter((meal) => meal.id < 4);
  return <MealList navigation={props.navigation} list={MEALS} />;
};

FavoritesScreen.navigationOptions = (nav) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-menu"
          onPress={() => {
            nav.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
