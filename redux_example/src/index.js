import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import nameReducer from './reducers/nameReducer';
import wishReducer from './reducers/wishReducer';
import thunk from 'redux-thunk';

const masterReducer = combineReducers({
    name: nameReducer,
    wish: wishReducer
})

const store = createStore(masterReducer, {name: 'ramesh',wish:['eat','food']},applyMiddleware(thunk));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));