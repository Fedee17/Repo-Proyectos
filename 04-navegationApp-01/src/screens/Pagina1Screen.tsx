import { DrawerScreenProps } from '@react-navigation/drawer'
// import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { colores, styles } from '../theme/appTheme'

interface Props extends DrawerScreenProps<any, any>{}; 

export const Pagina1Screen = ( { navigation }: Props ) => {

    useEffect(() => {
        navigation.setOptions({

            headerLeft: () => (
                <TouchableOpacity 
                    style={{
                        marginLeft: 10, 
                    }}
                    onPress={ () => navigation.toggleDrawer()}
                >
                    <Icon name="menu-outline" size={ 35 } color={ colores.primary } />
                </TouchableOpacity>
            )

        })
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title} > pagina1Screen </Text>

            <Button 
                title="Ir a página 2"
                onPress={ () => navigation.navigate( "Pagina2Screen" )}
            />

            <Text style={{ 
                marginVertical: 20,
                fontSize: 20,
                marginLeft: 5,
             }}> Navegando con Argumentos </Text>

            <View style={ {flexDirection: "row"} }>
                <TouchableOpacity
                    style={ {
                        ...styles.botonGrande,
                        backgroundColor: "#5856D6"
                    } }
                    onPress={ () => navigation.navigate("PersonaScreen", {
                        id: 1,
                        nombre: "Pedro"
                    })}
                >
                    <Icon name="man-outline" size={ 35 } color="white" />
                    <Text style={ styles.botonGrandeTexto }> Pedro </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ {
                        ...styles.botonGrande,
                        backgroundColor: "#FF9427"
                    } }
                    onPress={ () => navigation.navigate("PersonaScreen", {
                        id: 2,
                        nombre: "María"
                    })}            
                >
                    <Icon name="woman-outline" size={ 35 } color="white" />
                    <Text style={ styles.botonGrandeTexto }> María </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
