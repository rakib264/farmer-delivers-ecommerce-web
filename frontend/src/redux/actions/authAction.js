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
import axios from 'axios';

export const logout = () => async(dispatch) => {
    try {

        await axios.get('/farmex/logout');
        dispatch({
            type: LOGOUT_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const loadUser = () => async(dispatch) => {
    try {
        dispatch({
            type: LOAD_USER_REQUEST
        })
        const { data } = await axios.get('/farmex/loggedIn/user');
        console.log(data);
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}


export const Register = (name, email, password, avatar) => async(dispatch) => {
    try {
        dispatch({
            type: AUTH_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/farmex/register',  {name, email, password, avatar} , config);
        console.log(data);
        dispatch({
            type: AUTH_REGISTER_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: AUTH_REGISTER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const Login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: AUTH_LOGIN_REQUEST
        })
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/farmex/login', { email, password }, config);
        console.log(data);
        dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: AUTH_LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}


export const clearErrors = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}