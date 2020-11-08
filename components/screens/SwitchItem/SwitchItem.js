import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Colors from "../../../constants/Color";

const SwitchItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Switch
        value={props.value}
        trackColor={{ true: Colors.blue }}
        thumbColor={Colors.blue}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  title: {
    fontSize: 15,
  },
});

export default SwitchItem;
