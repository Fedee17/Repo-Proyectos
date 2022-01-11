import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {styles} from '../theme/appTheme';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCards } from '../components/PokemonCards';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const { simplePokemonList, loadPokemon } = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <FlatList 
        data={ simplePokemonList }
        keyExtractor={ (pokemon) => pokemon.id }
        showsVerticalScrollIndicator={ false }
        numColumns={ 2 }

        // Header
        ListHeaderComponent={(
          <Text
            style={{
            ...styles.title,
            ...styles.globalMargin,
            top: top + 20,
            marginBottom: top + 20,
          }}> Pokedex </Text>
        )}

        renderItem={ ({ item }) => ( <PokemonCards pokemon={ item }/> )}

        // Infinite Scroll
        onEndReached={ loadPokemon }
        onEndReachedThreshold={ 0.4 }

        ListFooterComponent={ 
          <ActivityIndicator 
            style={{ height: 100 }}
            size={ 20 }
            color="#5856D6"
          /> 
        }
      />

      {/*  */}
    </>
  );
};
