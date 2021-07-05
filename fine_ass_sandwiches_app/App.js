import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListView from "./components/list_view";
import DetailView from "./components/detail_view";
import screenA from "./screens/screenA";
import screenB from "./screens/screenB";
import screenC from "./screens/screenC";
import TabOne from "./screens/drawer/tab1";
import TabTwo from "./screens/drawer/tab2";
//since we are using expo everytime you npm install the server will stop working

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

renderTabComponents = () => (
  <Tab.Navigator>
    <Tab.Screen name="Tab One" component={TabOne} />
    <Tab.Screen name="Tab Two" component={TabTwo} />
  </Tab.Navigator>
);

renderScreenComponents = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={ListView} />
    <Stack.Screen name="Detail" component={DetailView} />
    <Stack.Screen name="Tabs" children={this.renderTabComponents} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={this.renderScreenComponents} />
        <Drawer.Screen name="Screen A" component={screenA} />
        <Drawer.Screen name="Screen B" component={screenB} />
        <Drawer.Screen name="Screen C" component={screenC} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
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
