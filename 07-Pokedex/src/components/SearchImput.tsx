import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebounceValue} from '../hooks/useDebounceValue';

interface Props {
  onDebounce: (value: string) => void;
}

export const SearchImput = ({onDebounce}: Props) => {
  const [textValue, setTextValue] = useState('');

  const debounceValue = useDebounceValue(textValue, 500);

  useEffect(() => {
    onDebounce(debounceValue);
  }, [debounceValue]);

  return (
    <View style={styles.container}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Buscar Pokémon"
          style={{
            ...styles.textInput,
            top: Platform.OS === 'ios' ? 0 : 2,
          }}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />

        <Icon name="search" color="grey" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // Sombra
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
