import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import client from "../screens/api/client";
export default class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    client.get("/").then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }
  render() {
    const { data } = this.state;
    const myText = "by Jake";
    return (
      <SafeAreaView style={styles.center}>
        <Image
          styles={styles.sandwichImage}
          source={require("../Images/sandwich.png")}
        />
        <Text style={styles.baseText}>Fine Ass Sandwiches</Text>
        <Text style={styles.newText}>{myText}</Text>
        <Text style={styles.title}> ListView </Text>
        <Button
          title="list Item, Click for Details"
          onPress={() => this.props.navigation.navigate("Detail")}
        />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={styles.itemText}>
              {item.sandwich_name}, {sandwich_city}
            </Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
  },
  baseText: {
    color: "navy",
    fontSize: 30,
    fontStyle: "italic",
  },
  newText: {
    color: "red",
  },
  sandwichImage: {
    width: 200,
    height: 200,
  },
});
