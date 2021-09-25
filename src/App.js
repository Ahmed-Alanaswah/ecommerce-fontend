import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderGame from "./compnent/HeaderGame";
import FavouriteGames from "./compnent/FavouriteGames";
import MainGames from "./compnent/MainGames";

export class App extends Component {
	render() {
		return (
			<>
				<Router>
					<HeaderGame />
					<Switch>
						<Route exact path="/">
							<MainGames />
						</Route>
						<Route exact path="/favourite">
							<FavouriteGames />
						</Route>
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;
