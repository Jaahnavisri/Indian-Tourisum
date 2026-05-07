import { useParams } from "react-router-dom";
import destinations from "./destinations.jsx";

const DestinationDetail = () => {
	const { id } = useParams();
	const destinationId =
		Number.parseInt(id, 10);
	const destination =
		destinations.find(
			dest =>
				dest.id === destinationId
		);

	if (!destination) {
		return <div className="destination-not-found">
			Destination not found
		</div>;
	}

	return (
		<div className="destination-detail">
			<h2>{destination.name}</h2>
			<img className="destination-detail-image" src={destination.image}
				alt={destination.name} />
			<p>{destination.description}</p>
			<p>Rating:
				{destination.rating || 'Not available'}
			</p>
			<p>
				Best time to visit:
				{destination.bestTime || 'Not specified'}
			</p>
			<button className="primary-button">Book Now</button>
		</div>
	);
};

export default DestinationDetail;
