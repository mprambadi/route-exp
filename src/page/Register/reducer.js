import { ON_REGISTER, REGISTER_SUCCESS, REGISTER_ERROR } from "./type";

const initialState = {
	loading: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ON_REGISTER:
			return { ...state, loading: true };
		case REGISTER_SUCCESS:
			return { ...state, loading: false };
		case REGISTER_ERROR:
			return { ...state, loading: false };

		default:
			return state;
	}
};
