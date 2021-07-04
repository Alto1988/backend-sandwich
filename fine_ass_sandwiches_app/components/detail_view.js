import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DetailView extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}> ListView </Text>
            </View>
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
    }
})
