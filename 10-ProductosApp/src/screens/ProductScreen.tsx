import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Keyboard } from 'react-native';

import {Picker} from '@react-native-picker/picker';

import { StackScreenProps } from '@react-navigation/stack'
import { ProductsStackParams } from '../navigator/ProductsNavigator'
import {  } from 'react-native-gesture-handler'
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'>{};

export const ProductScreen = ( { navigation, route }: Props) => {
    
    const { id = '', name = '' } = route.params;

    const { categories } = useCategories();

    const { loadProductById } = useContext( ProductsContext )

    const { _id, categoriaId, nombre, img, form, onChange, setFormValue } = useForm({
        _id: id,
        categoriaId: '',
        nombre: name,
        img: '',
    });

    const [selectedLanguage, setSelectedLanguage] = useState();

    useEffect( () => {
        navigation.setOptions({
            title: ( name ) ? name : 'Nuevo Producto',
        })
    }, [])

    useEffect(() => {
        loadProduct();
    }, [])

    const loadProduct = async () => {
        if ( id.length === 0 ) return;
        const product = await loadProductById( id );
        setFormValue({
            _id: id,
            categoriaId: product.categoria._id,
            img: product.img || '',
            nombre 
        })
    }
    
    return (
        <View style={styles.container}>
            
            <ScrollView>
                <Text style={styles.label}>Nombre del producto: </Text>
                <TextInput 
                    placeholder="Producto"
                    style={styles.textInput}
                    value={ nombre }
                    onChangeText={ ( value ) => onChange( value, 'nombre' )  }
                />

                <Text style={styles.label}>Categor??a:</Text>

                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }
                >

                    {
                        categories.map( c => (
                            <Picker.Item 
                                label={ c.nombre } 
                                value={ c._id }
                                key={ c._id }
                            />
                        ))
                    }

                    
                </Picker>

                <Button 
                    title="Guardar"
                    onPress={ () => {} }
                    color= '#5856D6'
                />

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <Button 
                        title="C??mara"
                        onPress={ () => {} }
                        color= '#5856D6'
                    />
                    
                    <View style={{ width: 15 }}/>
                    
                    <Button 
                        title="Galer??a"
                        onPress={ () => {} }
                        color= '#5856D6'
                    />

                </View>

                <Text>
                    { JSON.stringify( form, null, 5 ) }
                </Text>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20,
    },

    label: {
        fontSize: 18
    },

    textInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        height: 45,
        marginTop: 5,
        marginBottom: 15,
    }
});
