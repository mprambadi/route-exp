import {
	USER_LOGIN,
	USER_LOGIN_ERROR,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT
} from "./type";

const initialState = {
	auth: false,
	loading: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case USER_LOGIN:
			return { ...state, loading: true };
		case USER_LOGIN_ERROR:
			return { ...state, loading: false };
		case USER_LOGIN_SUCCESS:
			return { ...state, auth: true, loading: false };
		case USER_LOGOUT:
			return { ...state, auth: false };
		default:
			return state;
	}
};
