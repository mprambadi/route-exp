import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./actions";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { Form, withFormik } from "formik";
import { compose } from "redux";
import * as Yup from "yup";
import { getUserLoading } from "./selector";

class Login extends Component {
	render() {
		const {
			values,
			handleChange,
			handleBlur,
			errors,
			touched,
			isValid,
			loading,
			handleSubmit
		} = this.props;

		return (
			<div>
				<form onSubmit={handleSubmit}>
					<FormGroup>
						<Label for="exampleEmail">Email</Label>
						<Input
							type="email"
							name="email"
							id="exampleEmail"
							placeholder="with a placeholder"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							valid={!errors.email && touched.email}
							invalid={errors.email && touched.email}
						/>

						<FormFeedback>{errors.email}</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Label for="examplePassword">Password</Label>
						<Input
							type="password"
							name="password"
							id="examplePassword"
							placeholder="password placeholder"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							valid={!errors.password && touched.password}
							invalid={errors.password && touched.password}
						/>
						<FormFeedback>{errors.password}</FormFeedback>
					</FormGroup>
					<button
						className="btn btn-block btn-primary"
						type="submit"
						disabled={!isValid || loading}
					>
						Login
					</button>
				</form>

				<pre>{JSON.stringify(this.props, null, 2)}</pre>
			</div>
		);
	}
}

const LoginSchemaValidation = Yup.object().shape({
	email: Yup.string()
		.email("Format email salah")
		.required("Email harus diisi"),
	password: Yup.string()
		.min(4)
		.max(70)
});

const formEnhancer = withFormik({
	mapPropsToValues: () => ({ email: "coba@coba.com", password: "" }),
	validationSchema: LoginSchemaValidation,
	handleSubmit: (
		values,
		{ setFieldError, props: { userLoginAction, history } }
	) => {
		userLoginAction({ values, history, setFieldError });
	}
});

const mapStateToProps = state => ({
	loading: getUserLoading(state)
});

export default compose(
	connect(
		mapStateToProps,
		action
	),
	formEnhancer
)(Login);
