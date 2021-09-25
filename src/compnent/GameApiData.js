import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
export class GameApiData extends Component {
	render() {
		return this.props.gameApiData.map((obj, idx) => {
			return (
				<>
					<Col lg={3} md={6} sm={12}>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={obj.thumb} />
							<Card.Body>
								<Card.Title>{obj.title}</Card.Title>
								<Card.Text>
									Sale Price: {obj.salePrice}
									<BiDollar />
								</Card.Text>
								<Card.Text>
									Normal Price: {obj.normalPrice}
									<BiDollar />
								</Card.Text>
								<Card.Text>
									Rating: {obj.dealRating}: <BsFillStarFill />
								</Card.Text>
								{/* <form>
									<input type="hidden" value={obj.title} />
									<input type="hidden" value={obj.title} />
									<input type="hidden" value={obj.title} />
									<input type="hidden" value={obj.title} />
									<input type="hidden" value={obj.title} />
								</form> */}
								<Button
									variant="primary"
									onClick={(e) => this.props.addFavouriteGame(obj)}
								>
									Add to Cart
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</>
			);
		});
	}
}

export default GameApiData;
