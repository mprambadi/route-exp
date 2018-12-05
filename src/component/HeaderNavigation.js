import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Container
} from "reactstrap";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getAuth } from "../page/Login/selector";
import * as actions from "../page/Login/action";

class HeaderNavigation extends React.Component {
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
		const { auth, logoutAction } = this.props;

		return (
			<div>
				<Navbar color="success" light expand="md" dark>
					<Container>
						<NavLink to="/" className="navbar-brand">
							RR
						</NavLink>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									{auth && (
										<NavLink to="/dashboard" className="nav-link">
											Dashboard
										</NavLink>
									)}
								</NavItem>
								<NavItem>
									{auth && (
										<NavLink to="/profile" className="nav-link">
											Profile
										</NavLink>
									)}
								</NavItem>

								<NavItem>
									{auth ? (
										<NavLink
											to="/login"
											className="nav-link"
											onClick={() => logoutAction()}
										>
											Logout
										</NavLink>
									) : (
										<NavLink to="/login" className="nav-link">
											Login
										</NavLink>
									)}
								</NavItem>

								{auth || (
									<NavLink to="/about" className="nav-link">
										About
									</NavLink>
								)}

								{/* <UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Options
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem>Option 1</DropdownItem>
										<DropdownItem>Option 2</DropdownItem>
										<DropdownItem divider />
										<DropdownItem>Reset</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown> */}
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: getAuth(state)
});

export default connect(
	mapStateToProps,
	actions
)(HeaderNavigation);
