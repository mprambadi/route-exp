import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAuth } from "../page/Login/selector";

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props =>
				rest.auth ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
}

const mapStateToProps = state => ({
	auth: getAuth(state)
});

export default connect(mapStateToProps)(PrivateRoute);
