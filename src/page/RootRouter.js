import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import AuthRouter from "../component/PrivateRouter";
import NavbarNavigation from "../component/NavbarNavigation";

const Home = lazy(() => import("./Home"));
const UserProfile = lazy(() => import("./UserProfile"));
const Login = lazy(() => import("./Login"));
const Dashboard = lazy(() => import("./Dashboard"));

export default class RootRouter extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
               <NavbarNavigation />
						<Suspense fallback={<div>Loading .....</div>}>
							<Route path="/" exact component={Home} />
							<Route path="/profile" component={UserProfile} />
							<AuthRouter path="/dashboard" component={Dashboard} />
							<Route path="/login" component={Login} />
						</Suspense>
					</div>
				</Router>
			</div>
		);
	}
}
