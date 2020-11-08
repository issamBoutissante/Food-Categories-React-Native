import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../components/screens/CategoriesScreen";
import CategoryMealScreen from "../components/screens/CategoryMealScreen";
import MealDetailScreen from "../components/screens/MealDetailScreen";
import Colors from "../constants/Color";
import FavoriteScreen from "../components/screens/FavoritesScreen";
import FilterScreen from "../components/screens/FiltersScreen";
import FiltersScreen from "../components/screens/FiltersScreen";

const defaultStackNavigation = {
  headerStyle: {
    backgroundColor: Colors.blue,
  },
  headerTintColor: "white",
};

const MealNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeal: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigation,
  }
);

const FavirotesNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen,
  },
  { defaultNavigationOptions: defaultStackNavigation }
);

const MealTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealNavigator,
      navigationOptions: () => {
        return {
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-restaurant"
                size={24}
                color={tabInfo.tintColor}
              />
            );
          },
        };
      },
    },
    Favorites: {
      screen: FavirotesNavigator,
      navigationOptions: () => {
        return {
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />
            );
          },
        };
      },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: Colors.blue,
      activeTintColor: "white",
      inactiveTintColor: Colors.blue,
    },
  }
);

const FilterNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigation,
  }
);

const SideDrawer = createDrawerNavigator(
  {
    Meals: MealTabNavigator,
    Filters: FilterNavigator,
  },
  {
    contentOptions: {
      backgroundColor: Colors.blue,
      tintColor: "white",
      activeBackgroundColor: "white",
      activeTintColor: Colors.blue,
    },
  }
);
export default createAppContainer(SideDrawer);
