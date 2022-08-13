import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import React from "react";
import cars from "./cars";
import CardItem from "../CardItem/Index";

const CardList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CardItem car={item} />}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default CardList;
