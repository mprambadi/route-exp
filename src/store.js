import { createStore, applyMiddleware } from "redux";
import rootReducer from "./pages/rootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from "redux-thunk";


const persistConfig = {
   key: 'root',
   storage,
   whitelist:['login']
 }


const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store)