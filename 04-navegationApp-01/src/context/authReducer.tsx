import { AuthState } from "./AuthContext";

type AuthAction = 
| { type: "signIn" }
| { type: "logOut" }
| { type: 'changeFavIcon', payload: string}
| { type: 'changeUsername', payload: string}

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch ( action.type ) {
        case 'signIn':
            return {
               ...state,
               isloggedIn: true,
               username: undefined,
               favoriteIcon: undefined,
           }

        case 'logOut':
            return {
               ...state,
               isloggedIn: false,
               username: 'no-username-yet'
           }
    
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }

        case 'changeUsername':
            return {
                ...state,
                username: action.payload
            }

        default:
            return state;
    }

}