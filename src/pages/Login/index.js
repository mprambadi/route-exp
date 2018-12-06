import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import * as actions from "./action";
import { getLoginLoading } from "./selector";

const Login = ({
	handleChange,
	handleBlur,
	values,
	errors,
	touched,
	isValid,
	isLoading,
	handleSubmit,
	...props
}) => {
	return (
		<div>
			<Col sm="12" md={{ size: 4, offset: 4 }}>
				<Form>
					<FormGroup>
						<Label for="exampleEmail">Email</Label>
						<Input
							type="email"
							name="email"
							id="exampleEmail"
							placeholder="Input Your Email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							valid={!errors.email && touched.email}
							invalid={errors.email && touched.email}
						/>

						<FormFeedback valid>You will not be able to see this</FormFeedback>
						<FormFeedback>{errors.email}</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Label for="examplePassword">Password</Label>
						<Input
							type="password"
							name="password"
							id="examplePassword"
							placeholder="Input Your Password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							valid={!errors.password && touched.password}
							invalid={errors.password && touched.password}
						/>
						<FormFeedback valid>You will not be able to see this</FormFeedback>
						<FormFeedback>{errors.password}</FormFeedback>
					</FormGroup>

					<button
						className="btn btn-block btn-primary"
						disabled={!isValid || isLoading}
						type="submit"
					>
						Login
					</button>
				</Form>

				<pre>{JSON.stringify(props, null, 2)}</pre>
			</Col>
		</div>
	);
};

const LoginSchemaValidation = Yup.object().shape({
	email: Yup.string()
		.email("input harus berbentuk email")
		.required("harus di isi"),
	password: Yup.string()
		.min(6, "minimal 6 karakter")
		.required()
});

const mapStateToProps = state => ({
	isLoading: getLoginLoading(state)
});

export default compose(
	connect(
		mapStateToProps,
		actions
	),
	withFormik({
		mapPropsToValues: () => ({ email: "coba@gmail.com", password: "" }),
		validationSchema: LoginSchemaValidation,
		handleSubmit: (values, { setFieldError, props: { loginAction, history } }) => {
			loginAction({values, setFieldError, history})
		}
	})
)(Login);
