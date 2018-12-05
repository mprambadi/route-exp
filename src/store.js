import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootreducer from "./page/rootreducer";
import thunk from "redux-thunk";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["login"]
};

const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, rootreducer);

export const store = createStore(
	persistedReducer,
	applyMiddleware(...middleware)
);
export const persistor = persistStore(store);
