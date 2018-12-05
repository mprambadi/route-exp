import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERRORS, LOGOUT } from "./type";

export const loginAction = ({ values, setFieldError, history }) => dispatch => {
	dispatch(loginLoading());
	setTimeout(() => {
		if (values.password !== "coba") {
			setFieldError("password", "Password Not Match");
			dispatch(loginError());
		}
		if (values.email !== "coba@gmail.com") {
			setFieldError("email", "email not found");
			dispatch(loginError());
		}

		if (values.email === "coba@gmail.com" && values.password === "coba") {
			dispatch(loginSuccess());
			history.push("/dashboard");
		}
	}, 1000);
};

export const logoutAction = () => ({
   type:LOGOUT
})

const loginSuccess = payload => ({
	type: LOGIN_SUCCESS,
	payload
});

export const loginError = payload => ({
	type: LOGIN_ERRORS,
	payload
});

const loginLoading = () => ({
	type: LOGIN_LOADING
});
