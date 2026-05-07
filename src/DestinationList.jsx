import { useState } from "react";
import { Link } from "react-router-dom";
import destinations from "./destinations.jsx";

const DestinationList = () => {
	const [favorites, setFavorites] = useState([]);

	const toggleFavorite = (id) => {
		if (favorites.includes(id)) {
			setFavorites(
				favorites
					.filter(favId =>
						favId !== id)
			);
		} else {
			setFavorites([...favorites, id]);
		}
	};

	return (
		<div className="destinations-page">
			<ul className="destination-list">
				{destinations.map((destination) => (
					<li className="destination-card" key={destination.id}>
						<Link to={`/destination/${destination.id}`}
							style={
								{
									textDecoration: 'none',
									color: '#333'
								}}>
							<img className="destination-image" src={destination.image}
								alt={destination.name} />
							<h3>{destination.name}</h3>
							<h5>{destination.bestTime}</h5>
							<h6>{destination.rating}</h6>
						</Link>
						<button className="primary-button" onClick={
							() =>
								toggleFavorite(destination.id)
						}>
							{
								favorites.includes(destination.id) ?
									'Remove from Favorites' :
									'Add to Favorites'
							}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DestinationList;
