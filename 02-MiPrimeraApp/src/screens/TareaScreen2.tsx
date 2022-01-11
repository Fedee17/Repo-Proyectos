import React from 'react'
import { StyleSheet,View, Text } from 'react-native'

export const TareaScreen2 = () => {
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
        justifyContent: "center",
    },

    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#5B56D6",
        
    },

    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#F0A23B",
    },

    cajaAzul: {
        width: "100%",
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#2BC4D9",
      
    },
});