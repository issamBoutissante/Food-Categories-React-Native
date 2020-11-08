import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Color";
import SwitchItem from "./SwitchItem/SwitchItem";
import HeaderButton from "../HeaderButton/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FiltersScreen = (props) => {
  const [isGluten, setIsGluten] = useState(false);
  const [isLactose, setIsLactos] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const savedFilters = {
      isGlutenFree: isGluten,
      isVegan: isVegan,
      isVegetarian: isVegetarian,
      isLactoseFree: isLactose,
    };
    console.log(savedFilters);
  }, [isGluten, isVegan, isVegetarian, isLactose]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/ Restrictions</Text>
      <SwitchItem
        title="Gluten-Free"
        value={isGluten}
        onChange={(newValue) => {
          setIsGluten(newValue);
        }}
      />
      <SwitchItem
        title="Lactose-Free"
        value={isLactose}
        onChange={(newValue) => {
          setIsLactos(newValue);
        }}
      />
      <SwitchItem
        title="Vegan"
        value={isVegan}
        onChange={(newValue) => {
          setIsVegan(newValue);
        }}
      />
      <SwitchItem
        title="Vagetirian"
        value={isVegetarian}
        onChange={(newValue) => {
          setIsVegetarian(newValue);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    marginVertical: 15,
    fontSize: 24,
    textAlign: "center",
  },
});

FiltersScreen.navigationOptions = (nav) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            nav.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={nav.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};
export default FiltersScreen;
