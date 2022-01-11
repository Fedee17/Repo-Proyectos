import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowsWidth } = Dimensions.get('window');

export const HomeScreen = () => {
    
  const { nowPlaying, popular, topRated, upcoming, IsLoading } = useMovies();
  const { top } = useSafeAreaInsets();
    
    if ( IsLoading ) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={ 20 } /> 
            </View>
        )
    }

    return (

        <ScrollView>

            <View style={{ marginTop: top + 20 }}>
                
                <View style={{ height: 440 }}>
                    <Carousel 
                        data={ nowPlaying }
                        renderItem={ ({ item }: any ) => <MoviePoster movie={ item }/> }
                        sliderWidth={ windowsWidth }
                        itemWidth={ 300 }
                        inactiveSlideOpacity={ 0.8 }
                    />
                </View>

                <HorizontalSlider title="Peliculas populares" movies={ popular }/>
                <HorizontalSlider title="Peliculas populares" movies={ topRated }/>
                <HorizontalSlider title="Peliculas populares" movies={ upcoming }/>

            </View>
        </ScrollView>

            
    )
}
