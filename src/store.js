import { createStore, applyMiddleware } from "redux";
import rootReducer from "./page/rootReducer";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['login']
 }
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
const middleware = [thunk];
export const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store)
