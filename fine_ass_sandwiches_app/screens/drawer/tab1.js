import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class TabOne extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}> Tab One screen </Text>
      </View>
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
});
