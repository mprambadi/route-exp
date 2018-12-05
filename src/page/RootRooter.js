import React, { Suspense, lazy, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import HeaderNavigation from "../component/HeaderNavigation";
import PrivateRoute from "../component/PrivateRoute";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Register = lazy(() => import("./Register"));
const Login = lazy(() => import("./Login"));
const Profile = lazy(() => import("./Profile"));
const Dashboard = lazy(()=>import('./Dashboard'))

const RootRooter = () => {
	return (
		<Router>
			<Fragment>
				<HeaderNavigation />
				<Container>
					<Suspense fallback={<div>Loading</div>}>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/about" component={About} />
							<Route path="/register" component={Register} />
							<Route path="/login" component={Login} />
							<PrivateRoute path="/dashboard" component={Dashboard} />
							<PrivateRoute path="/profile" component={Profile} />
							<PrivateRoute path="/dashboard" component={Dashboard} />
						</Switch>
					</Suspense>
				</Container>
			</Fragment>
		</Router>
	);
};

export default RootRooter;
