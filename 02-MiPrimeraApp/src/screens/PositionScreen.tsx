import React from 'react'
import { StyleSheet,View } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#28C4D9",
        // justifyContent: "center",
        // alignItems: "center",
    },

    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: "#5856D6",
        borderWidth: 10,
        borderColor: "white",
        position: "absolute",
        top: 0,
        right: 0,
    },

    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: "#F0A22B",
        borderWidth: 10,
        borderColor: "white",
        top: 500,
        left: 0
    },
});
