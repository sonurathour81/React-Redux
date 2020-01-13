import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import counter from './reducers/incre_decre';

const store = createStore(counter);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)