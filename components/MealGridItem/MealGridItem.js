import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Directions } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

const MealGridItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <View style={styles.titleContainer}>
        <ImageBackground source={{ uri: props.image }} style={styles.image}>
          <View style={styles.textTitleContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {props.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.detailContainer}>
        <Text>{props.duration}m</Text>
        <Text>{props.complexity}</Text>
        <Text>{props.affordability}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "95%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    elevation: 10,
    overflow: "hidden",
  },
  titleContainer: {
    height: "85%",
    justifyContent: "flex-end",
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    height: "15%",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
  },
  textTitleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.557)",
    padding: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default MealGridItem;
