import { ON_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "./type";

export const loginAction = ({values, setFieldError, history}) => dispatch => {
	dispatch(onLogin());
	setTimeout(() => {
		if (values.email === "coba@coba.com") {
         dispatch(loginSuccess());
         history.push('/dashboard')
		} else {
         dispatch(loginError());
         setFieldError('email', 'email tidak terdaftar')
		}
	}, 1000);
};

const loginSuccess = payload => ({
	type: LOGIN_SUCCESS,
	payload
});

const loginError = payload => ({
	type: LOGIN_ERROR,
	payload
});

const onLogin = () => ({
	type: ON_LOGIN
});
