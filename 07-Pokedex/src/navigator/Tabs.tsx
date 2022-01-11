import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Navigator, Tab1 } from './Tab1';

import { Tab2Screen } from './tab2';

const Tab = createBottomTabNavigator();


export const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        tabBarOptions={{
            activeTinColor: 'black',  
            labelStyle: {
                marginBottom: ( Platform.OS === 'ios' ) ? 0 : 5,
            },
            style: {
                position: 'absolute',
                backgroundColor: 'rgba(255, 255, 255, 0.92',
                borderWidth: 0,
                elevation: 0,
                height: (Platform.OS === 'ios') ? 80 : 60,
            }
        }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={ Tab1 } 
        options={{
            tabBarLabel: "Listado",
            tabBarIcon: ({ color }) => ( 
                <Icon 
                    color={ color } 
                    size={ 25 }
                    name="list"
                />
            )
        }}
      />
      <Tab.Screen 
        name="SearchScreen"
        component={Tab2Screen} 
        options={{
            tabBarLabel: 'Búsqueda',
            tabBarIcon: ({ color }) => ( 
                <Icon 
                    color={ color } 
                    size={ 25 }
                    name="search"
                />
            )
        }}
        />
    </Tab.Navigator>
  );
}
