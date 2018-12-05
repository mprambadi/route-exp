import React from "react";
import "./App.css";
import RootRooter from "./page/RootRooter";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
	return (
		<Provider store={store}>
				<PersistGate loading={null} persistor={persistor} >
			<React.Fragment>
					<RootRooter />;
			</React.Fragment>
				</PersistGate>
		</Provider>
	);
};

export default App;
