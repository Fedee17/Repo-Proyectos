import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    position?: "br" | "bl";
    onPress: () => void;
    
}

export const Fab = ( {title, onPress, position = "br" }: Props ) => {
    
    const ios = () => {
        return (
            <TouchableOpacity  onPress={ onPress } activeOpacity={ 0.8 } style={[style.fabLocation, ( position === "bl" ) ? style.left : style.right]} >
    
                    <View style={ style.fab }>
                        <Text style={ style.fabText }> {title} </Text>
                    </View>
      
            </TouchableOpacity>
            
        ) 
    }

    const android = () => {
        return (
            <View style={[style.fabLocation, ( position === "bl" ) ? style.left : style.right]} >
                <TouchableNativeFeedback onPress={ onPress } background={ TouchableNativeFeedback.Ripple("#8786FF", false, 30) }>
    
                    <View style={ style.fab }>
                        <Text style={ style.fabText }> {title} </Text>
                    </View>
    
                </TouchableNativeFeedback>
            </View>
            
        ) 
    }

    return ( Platform.OS === "ios" ) ? ios() : android(); 

    
}

const style = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },

    right: {
        right: 25
    },

    left: {
        left: 25
    },

    fab: {
        backgroundColor: "#5856D6",
        width: 60, 
        height: 60,
        borderRadius: 100,
        justifyContent: "center"
    },

    fabText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center"

    },

})
