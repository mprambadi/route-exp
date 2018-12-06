import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationHeader from "../component/NavigationHeader";
import PrivateRoute from "../component/PrivateRoute";
import { Container } from "reactstrap";

// import Home from "./Home";
// import About from "./About";
// import Login from "./Login";
// import Register from "./Register";
// import UserDetail from "./UserDetail";
// import Dashboard from "./Dashboard";

const Home = lazy(()=>import('./Home'))
const About = lazy(()=>import('./About'))
const Login = lazy(()=>import('./Login'))
const Register = lazy(()=>import('./Register'))
const UserDetail = lazy(()=>import('./UserDetail'))
const Dashboard = lazy(()=>import('./Dashboard'))

class MainRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<NavigationHeader />

					<Container>
                  <Suspense fallback={<div>Loading........</div>}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
							<PrivateRoute path="/dashboard" component={Dashboard} />
							<PrivateRoute path="/detail/:id" component={UserDetail} />
						</Switch>
                  </Suspense>
					</Container>
				</div>
			</BrowserRouter>
		);
	}
}

export default MainRouter;
