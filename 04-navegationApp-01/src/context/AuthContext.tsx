import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

//Define como se ve, qué información hay acá
export interface AuthState {
    isloggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado Inicial
export const  authInitialState: AuthState = {
    isloggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

//Se una para decirle a React cómo se ve y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeFavoriteIcon: ( iconName: string ) => void;
    changeUsername: (username: string) => void;
}

//Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps );

// Componente proveedor del estado
export const AuthProvider = ({ children }: any ) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const changeFavoriteIcon = ( iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logOut = () => {
        dispatch({ type: 'logOut'});
    }

    const changeUsername = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut,
            changeFavoriteIcon,
            changeUsername,
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}