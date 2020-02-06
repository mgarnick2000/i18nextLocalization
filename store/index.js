import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from './modules';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk);
const storeV = createStore(reducers, composeEnhancer(middleware));

export const store = storeV;

export const persistor = persistStore(store);
