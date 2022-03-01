import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer, productDetailsReducer } from './redux/reducers/productReducer'
import { authReducer } from './redux/reducers/authReducer';

const reducer = combineReducers({
    product: productReducer,
    productDetails: productDetailsReducer,
    auth: authReducer
})

let initialState = {};
const middleware = [thunk];

const store = createStore( reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)) );

export default store;