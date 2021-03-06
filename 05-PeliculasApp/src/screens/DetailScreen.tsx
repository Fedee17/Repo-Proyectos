import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import  Icon  from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get( 'screen' ).height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {};

export const DetailScreen = ( { route, navigation }: Props ) => {
    
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const { isLoading, cast, movieFull } = useMovieDetails( movie.id );

    console.log({ cast })

    return (

        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={ styles.posterImage }

                    /> 
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{ movie.original_title }</Text>
                <Text style={styles.title}>{ movie.title }</Text>
            </View>


            {
                isLoading 
                    ?   <ActivityIndicator size={ 35 } color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={ movieFull! } cast={ cast }/>
            }

            {/* Boton para regresar */}

            <View style={ styles.backButton}>
                <TouchableOpacity onPress={ () => navigation.pop() } >
                    <Icon 
                        color="white"
                        name="arrow-back-circle-outline"
                        size={ 35 }
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {   
        width: '100%',
        height: screenHeight * 0.7, 
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.9,
        shadowRadius: 7,

        elevation: 9, 

        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },

    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },

    posterImage: {
        flex: 1,

    },

    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },

    subTitle: {
        fontSize: 16,
        opacity: 0.8
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    backButton: {
        position: 'absolute',
        elevation: 9,
        top: 20,
        left: 5,
    }

});