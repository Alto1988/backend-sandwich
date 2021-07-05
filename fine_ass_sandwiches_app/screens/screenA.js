import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class screenA extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}> Screen A component </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 26,
    fontStyle: "italic",
    color: "green",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
