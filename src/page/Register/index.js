import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Row, Col, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { withFormik } from "formik";
import * as Yup from "yup";
import * as actions from "./action";
import { getRegisterLoading } from "./selector";

class Register extends Component {
	render() {
		const {
			values,
			touched,
			errors,
			handleChange,
			handleBlur,
			isValid,
			handleSubmit,
			loading
		} = this.props;

		return (
			<Row className="mt-5">
				<Col sm="12" md={{ size: 4, offset: 4 }}>
					<form onSubmit={handleSubmit}>
						<FormGroup>
							<Label for="exampleEmail">Email</Label>
							<Input
								type="text"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								name="email"
								id="exampleEmail"
								placeholder="email"
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
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
								id="examplePassword"
								placeholder="password"
								valid={!errors.password && touched.password}
								invalid={errors.password && touched.password}
							/>
							<FormFeedback>{errors.password}</FormFeedback>
						</FormGroup>
						<button
							color="primary"
							type="submit"
							className={`btn btn-block btn-primary ld-ext-right ${loading &&
								"running"}`}
							disabled={!isValid || loading}
						>
							Submit
							<div className="ld ld-ring ld-spin" />
						</button>
					</form>
				</Col>
			</Row>
		);
	}
}

const LoginSchema = Yup.object().shape({
	password: Yup.string()
		.min(2, "Too Short!")
		.max(70, "Too Long!")
		.required("Required"),
	email: Yup.string()
		.email("Invalid email")
		.required("Required")
});
const myEnhancedForm = withFormik({
	mapPropsToValues: () => ({
		email: "coba@gmail.com",
		password: "",
		loading: false
	}),
	validationSchema: LoginSchema,
	handleSubmit: (
		values,
		{ setFieldValue, setFieldError, props: { history, registerAction } }
	) => {
		registerAction({ values, setFieldError, setFieldValue, history });
	}
});

const mapStateToProps = state => ({
	loading: getRegisterLoading(state)
});

export default compose(
	connect(
		mapStateToProps,
		actions
	),
	myEnhancedForm
)(Register);
