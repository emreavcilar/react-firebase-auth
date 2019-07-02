import { combineReducers } from 'redux';
import homeReducer from './home';
import signInReducer from './sign-in';
import sessionReducer from './sign-in';

const combineRed = combineReducers({
    homeReducer,
    signInReducer,
    sessionReducer
});

export default combineRed