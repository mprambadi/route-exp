import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Container
} from "reactstrap";

import { NavLink } from "react-router-dom";
export default class NavigationHeader extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<Container>
						<NavbarBrand href="/">reactstrap</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink exact to="/" className="nav-link text-uppercase ">
										home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink exact to="/dashboard" className="nav-link text-uppercase ">
										dashboard
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/register" className="nav-link text-uppercase">
										register
									</NavLink>
								</NavItem>

								<NavItem>
									<NavLink to="/about" className="nav-link text-uppercase">
										about
									</NavLink>
								</NavItem>

								<NavItem>
									<NavLink to="/login" className="nav-link text-uppercase">
										login
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}
