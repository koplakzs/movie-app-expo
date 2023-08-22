import { Dimensions, Image, Text, View } from "react-native";
import React, { Component } from "react";
import Carousel from "react-native-reanimated-carousel";

export class ImageCarousel extends Component {
  urlImage = "https://image.tmdb.org/t/p/original";
  width = Dimensions.get("window").width;
  render() {
    const data = this.props.data;

    return (
      <View>
        <Carousel
          loop
          width={this.width}
          height={this.width / 2}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={2000}
          renderItem={({ item }) => (
            <Image
              source={{ uri: `${this.urlImage}${item.backdrop_path}` }}
              style={{ width: this.width, height: this.width / 2 }}
            />
          )}
        />
      </View>
    );
  }
}

export default ImageCarousel;
