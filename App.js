import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CardList from "./components/CardList.js";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CardList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
