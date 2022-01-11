import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react'
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={ style.container}>

            <Text style={ style.title }> 
                Contador: { contador }
            </Text>
            
            <Fab 
                title= "+1"
                onPress={ () => setContador( contador + 1 )}
            />

            <Fab 
                title= "-1"
                position= "bl"
                onPress={ () => setContador( contador - 1 )}
            />

            {/* <TouchableOpacity style={ style.fabLocationBL } onPress={ () => setContador( contador - 1 )}>

                <View style={ style.fab }>
                    <Text style={ style.fabText }>-1</Text>
                </View>
                
            </TouchableOpacity> */}
          
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        BackgroundColor: 'red'
    },

    title: { 
        fontSize: 40,
        textAlign: 'center',
        top: -30
    },


   

})



