import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require("../../images/logo.png")} />
      <Image style={styles.menu} source={require("../../images/menu.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 30,
    position: "absolute",
    zIndex: 2,
    top: 20,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
export default Header;
