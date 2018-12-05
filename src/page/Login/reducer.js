import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERRORS, LOGOUT } from "./type";

const initialState = {
	auth: false,
	loading: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN_SUCCESS:
			return { ...state, auth: true, loading: false };
		case LOGIN_LOADING:
			return { ...state, loading: true };
		case LOGIN_ERRORS:
			return { ...state, loading: false };
		case LOGOUT:
			return { ...state, auth: false };
		default:
			return state;
	}
};
