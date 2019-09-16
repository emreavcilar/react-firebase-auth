import { combineReducers } from 'redux';
import homeReducer from './home';

const combineRed = combineReducers({
    homeReducer
});

export default combineRed