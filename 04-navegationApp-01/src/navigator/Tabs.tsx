import  React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';

import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTapNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

  return Platform.OS === 'ios'
    ? <TabsIOS/>
    : <TabsAndroid/>
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid () {
  return (
    <BottomTabAndroid.Navigator 
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: colores.primary
      }}

      screenOptions={ ({ route }) =>  ({
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';
          switch ( route.name ) {
            case 'Tab1Screen':
              iconName = 'beer-outline'
            break;

            case 'TopTabNavigator':
              iconName = 'earth-outline'
            break;

            case 'StackNavigator':
              iconName = 'game-controller-outline'
            break;
          }  

          return <Icon name={ iconName } size={ 20 } color={ color } />
        }
      })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: "Tab1Screen" }} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: "TopTabNavigator"}} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: "Stack"}} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator 
      sceneContainerStyle={{
        backgroundColor: "white"
      }}

      tabBarOptions={{
        activeTinColor: colores.primary,
        style: { 
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        }, 

        labelStyle: { 
          fontSize: 15,
        }
      }}

      screenOptions={ ({ route }) =>  ({
        tabBarIcon: ({ color, focused, size }) => {

          let iconName: string = '';
          switch ( route.name ) {
            case 'Tab1Screen':
              iconName = 'beer-outline'
            break;

            case 'TopTabNavigator':
              iconName = 'earth-outline'
            break;

            case 'StackNavigator':
              iconName = 'game-controller-outline'
            break;
          }  

          return <Icon name={ iconName } size={ 20 } color={ color } />
        }
      })}  
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: "Tab1", tabBarIcon: (props) => <Text style={{ color: props.color }}>Tab1</Text>}} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: "Tab1Screen" }} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: "TopTabNavigator"}} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: "Stack"}} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}