import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

    const { logOut, authState: { isloggedIn } } = useContext( AuthContext )
 

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> AlbumsScreen</Text>

            {
                isloggedIn && <Button 
                    title="LogOut" 
                    onPress={ logOut }
                /> 
            }

        </View>
    )
}
