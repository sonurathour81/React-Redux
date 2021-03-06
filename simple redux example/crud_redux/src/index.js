import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import rootReducer from './reducers/index';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer,composeEnhancers(applyMiddleware(thunk)));
let persistor = persistStore(store)

ReactDOM.render(
<Provider store={store}>
    <PersistGate persistor={persistor}> 
        <App />
    </PersistGate>
</Provider>, document.getElementById('root'));
