import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealNavigator from "./Navigation/MealNavigator";
import { enableScreens } from "react-native-screens";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  if (!isAppLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsAppLoaded(true)}
      />
    );
  }
  return <MealNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
