import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect}from 'react-redux'
import * as actions from '../Login/actions'
class Dashboard extends Component {
	render() {
      const {onLogout} = this.props
		return (
			<div>
				ini Dashboard
				<Link to="/profile"> Profile </Link>
				{/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
				<Link onClick={() => onLogout()} to="/"> Logout </Link>
			</div>
		);
	}
}


export default connect(null, actions)(Dashboard)