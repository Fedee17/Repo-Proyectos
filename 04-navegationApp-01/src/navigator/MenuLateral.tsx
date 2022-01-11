import React from 'react'

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { Tabs } from './Tabs'

import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();



export const MenuLateral = () => { 

  const { width } = useWindowDimensions(); 

  return (
    <Drawer.Navigator
      screenOptions={{
          headerShown: false,
          drawerType:  width>= 768 ? 'permanent' : 'front',     
      }}

      drawerContent= { (props) => <MenuInerno {...props } />}
    >

      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    
    </Drawer.Navigator>
  );
}

const MenuInerno  = ( {navigation } : DrawerContentComponentProps) => {


  return (
    <DrawerContentScrollView>
      <View style={ styles.avatarContainer}>
        <Image 
          source={{
            uri: "https://fidel.com.ar/Content/Idea/images/logo_red.png"
          }}

          style={ styles.avatar}
        />
      </View>

          <View style={ styles.menuContainer}>

           <TouchableOpacity 
              style={{ 
                ...styles.menuBoton,
                flexDirection: "row",
              }} 
              onPress= {() => navigation.navigate("Tabs")}  
            >
              <Icon name="compass-outline" size={ 20 } color={ colores.primary } />
              <Text style={ styles.menuTexto}> Navegacion </Text>
           </TouchableOpacity>

           <TouchableOpacity 
              style={{ 
                ...styles.menuBoton, 
                flexDirection: "row",
              }}
              onPress= {() => navigation.navigate("SettingsScreen")}
            >
              <Icon name="settings-outline" size={ 20 } color={ colores.primary } />
              <Text style={ styles.menuTexto}> Ajustes </Text>
           </TouchableOpacity>

          </View>

    </DrawerContentScrollView>
  );
}