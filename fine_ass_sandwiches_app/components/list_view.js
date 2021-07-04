import React, { Component } from 'react'
import { Text, StyleSheet, Image, Button, SafeAreaView } from 'react-native'

export default class ListView extends Component {
    render() {
        const myText = 'by Jake';
        return (
        <SafeAreaView style={styles.center}>
            <Image styles={styles.sandwichImage} source={
                require("../Images/sandwich.png")}/>
        <Text style={styles.baseText}>Fine Ass Sandwiches</Text>
        <Text style={styles.newText}>{myText}</Text>
            <Text style={styles.title}> ListView </Text>
                <Button title="list Item, Click for Details"/>
        </SafeAreaView>
        )
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
})
