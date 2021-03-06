import React, { Component } from "react";
// import FavouriteData, { favouriteData } from "./FavouriteData";
import { Card, Button, Col } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
export class FavouriteData extends Component {
	render() {
		return this.props.ApiCrudData.map((obj, idx) => {
			return (
				<>
					<Col lg={4} md={6} sm={6} xs={12}>
						<Card className="card-game" style={{ width: "18rem" }}>
							<Card.Img variant="top" src={obj.thumb} />
							<Card.Body>
								<Card.Title>{obj.title}</Card.Title>
								<Card.Text>
									Normal Price: {obj.normalPrice}
									<BiDollar />
								</Card.Text>
								<Card.Text>
									Sale Price: {obj.salePrice}
									<BiDollar />
									<AiFillFire />
								</Card.Text>

								<Card.Text>
									Rating: {obj.dealRating}: <BsFillStarFill />
								</Card.Text>
								<Card.Text>count: {obj.count}</Card.Text>
								<Button
									variant="primary"
									onClick={(e) => this.props.removeFavouriteGame(obj.slug)}
								>
									Remove From Cart
								</Button>
								<Button
									variant="primary"
									onClick={(e) =>
										this.props.showUpdateForm(obj.count, obj.slug)
									}
								>
									Edit Items
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</>
			);
		});
	}
}

export default FavouriteData;
