import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView} from 'react-native';
import ListView from './components/list_view';
//since we are using expo everytime you npm install the server will stop working

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListView/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
  },
  baseText: {
    color: 'navy',
    fontSize: 30,
    fontStyle: 'italic',
  },
  newText: {
    color: 'red',
  },
  sandwichImage: {
    width: 200,
    height: 200,
  }
});
