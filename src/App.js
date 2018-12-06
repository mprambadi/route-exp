import React, { Component } from "react";
import MainRouter from "./pages/MainRoute";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from "./store";


class App extends Component {
	render() {
		return (
			<Provider store={store}>
            <PersistGate loading={<div>ini persist</div>} persistor={persistor}>
				<MainRouter />
            </PersistGate>
			</Provider>
		);
	}
}

export default App;
