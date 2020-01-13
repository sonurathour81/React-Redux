import { combineReducers } from 'redux';
import formObj from './formObj';
import incre_decre from './incre_decre';

const rootReducer = combineReducers({
    userData: formObj,
    result: incre_decre
})

export default rootReducer;