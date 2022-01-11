import React from 'react'
import { StyleSheet,View, Text } from 'react-native'

export const TareaScreen7 = () => {
    return (
        <View style={ styles.container }>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
            <View style={styles.cajaAzul}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2B425B",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#5B56D6",
        // alignSelf: "flex-end"
      
    },

    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#F0A23B",
        // alignSelf: "center"
        

    },

    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#2BC4D9",
        // alignSelf: "flex-start"
    },
});
