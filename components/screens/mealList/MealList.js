import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import MealGridItem from "../../MealGridItem/MealGridItem";

const MealList = (props) => {
  const renderItems = (data) => {
    return (
      <MealGridItem
        image={data.item.imageUrl}
        title={data.item.title}
        duration={data.item.duration}
        complexity={data.item.complexity}
        affordability={data.item.affordability}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: { mealId: data.item.id },
          });
        }}
      />
    );
  };
  return <FlatList data={props.list} renderItem={renderItems} />;
};
export default MealList;
