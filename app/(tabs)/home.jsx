import { ScrollView, Text, View } from "react-native";
import React, { Component } from "react";
import ImageCarousel from "../../components/layouts/imageCarousel";
import Card from "../../components/common/card";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlay: {
        result: [],
        isLoading: true,
        isError: false,
      },
    };
  }
  apiAccess = process.env.EXPO_PUBLIC_API_ACCESS_TOKEN;

  options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${this.apiAccess}`,
    },
  };

  fetchNowPlay = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        this.options
      );
      const movie = await res.json();
      this.setState((prevState) => ({
        nowPlay: { ...prevState.nowPlay, result: movie.results },
      }));
    } catch (error) {
      this.setState((prevState) => ({
        nowPlay: { ...prevState.nowPlay, isError: true },
      }));
    } finally {
      this.setState((prevState) => ({
        nowPlay: { ...prevState.nowPlay, isLoading: false },
      }));
    }
  };

  componentDidMount() {
    this.fetchNowPlay();
  }

  render() {
    const { result, isLoading, isError } = this.state.nowPlay;
    return (
      <View style={{ flex: 1 }}>
        {isLoading ? (
          <Text>Loading</Text>
        ) : (
          <ScrollView>
            <ImageCarousel data={result.slice(0, 5)} />
            <Text style={{ marginVertical: 10, textAlign: "center" }}>
              Movie On Playing
            </Text>
            <Card data={result} />
          </ScrollView>
        )}
      </View>
    );
  }
}

export default Home;
