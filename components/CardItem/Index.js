import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";
import React from "react";
import StyleButton from "../StyleButton";

const CardItem = ({ car }) => {
  const { name, tagline, image, taglineCTA } = car;
  console.log(name, tagline, image);
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      {/* bottom Buttons */}
      <View style={styles.buttonsContainer}>
        <StyleButton
          type="primary"
          content="Custom Order"
          onPress={() => console.warn("Custom Order Was Press")}
        />
        <StyleButton
          type="secondary"
          content="existing Envintory"
          onPress={() => console.warn("Envintory Was Press")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer: {
    position: "absolute",
    width: "100%",
    bottom: 50,
  },
});
export default CardItem;
