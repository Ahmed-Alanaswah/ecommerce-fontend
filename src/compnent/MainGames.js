import React, { Component } from "react";
import axios from "axios";
import GameApiData from "./GameApiData";
import { Row } from "react-bootstrap";
export class MainGames extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: process.env.REAC_APP_SERVER_URL,
			gameApiData: [],
			showGameData: false,
			showApiMessege: false,
			messege: "",
		};
	}

	componentDidMount = async () => {
		const request = await axios.get(`http://localhost:8080/game`);
		this.setState({
			gameApiData: request.data,
			showGameData: true,
		});
	};

	addFavouriteGame = async (object) => {
		const postRequest = await axios.post(
			`http://localhost:8080/game/favourite`,
			object
		);
		console.log(object);
		// this.setState({
		// 	messege: postRequest.data,
		// 	showApiMessege: true,
		// });
	};

	render() {
		return (
			<>
				<Row>
					{this.state.showApiMessege && <h3>{this.state.messege}</h3>}
					{this.state.showGameData && (
						<GameApiData
							gameApiData={this.state.gameApiData}
							addFavouriteGame={this.addFavouriteGame}
						/>
					)}
				</Row>
			</>
		);
	}
}

export default MainGames;
