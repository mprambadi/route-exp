import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

import { NavLink } from "react-router-dom";
export default class NavbarNavigation extends React.Component {
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
					<NavbarBrand href="/">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink to="/dashboard" className="nav-link">
									Dashboard
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/" className="nav-link">
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/login" className="nav-link">
									Login
								</NavLink>
							</NavItem>

						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
