import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default class DetailView extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>
          {" "}
          Detail View should display details for sandwich resturaunts
        </Text>
        <Button
          title="Click for Tabs"
          onPress={() => this.props.navigation.navigate("Tabs")}
        />
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
    fontSize: 26,
    marginBottom: 16,
    textAlign: "center",
  },
});
