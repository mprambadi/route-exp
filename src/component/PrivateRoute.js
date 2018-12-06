import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import { getAuth } from "../pages/Login/selector";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return rest.auth ? <Component {...props}/> : <Redirect to="/login"/>
         }
			}
		/>
	);
};

const mapStateToProps = (state) => ({
   auth:getAuth(state)
})

// export default PrivateRoute
export default connect(mapStateToProps, null)(PrivateRoute);

