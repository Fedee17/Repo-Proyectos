import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';




export const DimensionesScreen = () => {

    const { width, height } = Dimensions.get('window');

    return (
        <View>
            <View style={ styles.container }>
                <View style={ {...styles.cajaMorada, width: width * 0.50} } />
                <View style={ styles.cajaNaranja } />            
            </View>
            <Text style={ styles.title}> W: { width }, H: { height }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "200%",
        height: 600,
        backgroundColor: "red"
    },

    cajaMorada: {
        backgroundColor: "#5856D6",
        width: "50%",
        height: "50%",
    },

    cajaNaranja: {
        backgroundColor: "#F0A22B"
    },

    title: {
        fontSize: 30,
        textAlign: "center",
    },
});