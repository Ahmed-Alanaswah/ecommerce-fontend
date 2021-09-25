import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
export class HeaderGame extends Component {
	render() {
		return (
			<>
				<Nav variant="pills">
					<NavLink exact to="/">
						Active
					</NavLink>

					<NavLink exact to="/favourite">
						Option 2
					</NavLink>
				</Nav>
			</>
		);
	}
}

export default HeaderGame;
