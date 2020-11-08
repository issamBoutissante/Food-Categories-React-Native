import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridItem from "../CategoryGridItem/CategoryGridItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../HeaderButton/HeaderButton";

const CategoriesScreen = (props) => {
  const renderGridItem = (Data) => {
    return <CategoryGridItem navigation={props.navigation} Data={Data} />;
  };
  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = (nav) => {
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
export default CategoriesScreen;
