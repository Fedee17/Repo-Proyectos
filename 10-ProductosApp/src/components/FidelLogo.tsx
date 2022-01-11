import React from 'react'
import { Image, View } from 'react-native'

export const FidelLogo = () => {
    return (
        <View style={{
            alignItems:'center',
            // flex:1,
        }}>
            <Image 
                source={require('../assets/fidel_backend.png')}
                style={{
                    // marginTop: ,
                    height: 80,
                    width: 340,
                    marginBottom: 60
                }}
            />
        </View>
    )
}