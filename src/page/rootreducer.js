import { combineReducers } from "redux";
import about from "./About/reducer";
import login from "./Login/reducer";
import register from './Register/reducer'

export default combineReducers({
	about,
   login,
   register
});

