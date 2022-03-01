import {
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAIL,
    AUTH_REGISTER_REQUEST,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from '../consts/constants';

export const authReducer = ( state= { user:{} }, action) => {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
        case AUTH_REGISTER_REQUEST:  
        case LOAD_USER_REQUEST:  
           return{
                loading: true,
                isAuthenticated: false
           }
        case AUTH_LOGIN_SUCCESS:
        case AUTH_REGISTER_SUCCESS:
        case LOAD_USER_SUCCESS:    
           return{
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
           }  

        case LOAD_USER_FAIL:
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }  
        
        case AUTH_LOGIN_FAIL:
        case AUTH_REGISTER_FAIL:
        return{
            ...state,
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload
        }

        case LOGOUT_SUCCESS:
            return{
                loading: false,
                isAuthenticated: false,
                user: null,
            } 

        case LOGOUT_FAIL:
            return{
                ...state,
                error: action.payload
            }  

        case CLEAR_ERRORS:
        return{
           ...state,
            error: null
        } 
    
        default:
            return state;
    }
}