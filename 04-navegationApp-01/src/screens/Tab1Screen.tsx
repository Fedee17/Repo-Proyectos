import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';



export const Tab1Screen = () => {
    
    const { top } = useSafeAreaInsets();
    
    return (
        <View style={{ 
            ...styles.globalMargin, 
            marginTop: top + 10 , 
        }}>
            <Text style={ styles.title}> Iconos </Text>
        
            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="boat-outline" />
                <TouchableIcon iconName="battery-full-outline" />
                <TouchableIcon iconName="briefcase-outline" />
                <TouchableIcon iconName="car-sport-outline" />
                <TouchableIcon iconName="cloudy-night-outline" />
                <TouchableIcon iconName="desktop-outline" />
                <TouchableIcon iconName="fast-food-outline" />
            </Text>
        </View >
    )
}
