import {USER_LOGOUT, USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "./type";

export const userLoginAction = ({values, history, setFieldError}) => dispatch => {
	dispatch(onLogin());

	setTimeout(() => {
		if (values.email === "coba@coba.com") {
			dispatch(onLoginSuccess());
         localStorage.setItem('login', 'true')
         history.push("/dashboard");
			return;
		}

      setFieldError("email", "email salah")
		dispatch(onLoginError());
	}, 1000);
};

export const onLogin = () => ({
	type: USER_LOGIN
});

export const onLoginError = payload => ({
	type: USER_LOGIN_ERROR,
	payload
});

export const onLoginSuccess = payload => ({
	type: USER_LOGIN_SUCCESS,
	payload
});


export const onLogout = () => ({
   type: USER_LOGOUT
})