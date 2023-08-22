import { Image, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

export class Card extends Component {
  urlImage = "https://image.tmdb.org/t/p/w500";
  render() {
    const data = this.props.data;
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {data.map((movie, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={{ uri: `${this.urlImage}${movie.poster_path}` }}
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{movie.original_title}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Card;
