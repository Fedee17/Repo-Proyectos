import React, { useContext } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { PERMISSIONS, PermissionStatus, request } from 'react-native-permissions'
import { PermissionsContext } from '../context/PermissionsContext'

export const PermissionsScreen = () => {
    
    const { permissions, askLocationPermissions } = useContext( PermissionsContext )
    
    return (
        <View style={styles.container}>
            <Text>PermissionsScreen</Text>
    
            <Button 
                title="Permiso"
                onPress={ askLocationPermissions }
            />

            <Text>
                { JSON.stringify( permissions, null, 5 ) }
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
