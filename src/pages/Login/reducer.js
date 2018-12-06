import { ON_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "./type";

const initialState = {
	loading: false,
	auth: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ON_LOGIN:
			return { ...state, loading: true };
		case LOGIN_SUCCESS:
			return { ...state, loading: false, auth: true };
		case LOGIN_ERROR:
			return { ...state, loading: false };
		case LOGOUT:
			return { ...state, auth: false };
		default:
			return state;
	}
};
