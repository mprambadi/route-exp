import { ON_REGISTER, REGISTER_SUCCESS, REGISTER_ERROR } from "./type";

export const registerAction = ({
	values,
	setFieldError,
	history
}) => dispatch => {
	dispatch(onRegister());
	setTimeout(() => {
		if (values.email === "coba@gmail.com") {
			setFieldError("email", "email has used");
			dispatch(registerError());
			return;
		}

		dispatch(registerSuccess());
		history.push("/dashboard");
	}, 1000);
};

export const registerSuccess = payload => ({
	type: REGISTER_SUCCESS,
	payload
});

export const onRegister = () => ({
	type: ON_REGISTER
});

export const registerError = payload => ({
	type: REGISTER_ERROR,
	payload
});
