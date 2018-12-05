import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getAuthUser } from "../page/Login/selector";

const AuthRouter = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				rest.auth ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: "/login", state: { from: props.location } }}
					/>
				)
			}
		/>
	);
};

const mapStateToProps = state => ({
	auth: getAuthUser(state)
});

export default connect(mapStateToProps)(AuthRouter);
