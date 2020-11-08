import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const headerButton = (props) => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      {...props}
      iconSize={22}
      color="white"
    />
  );
};

export default headerButton;
