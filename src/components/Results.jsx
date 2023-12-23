import React, { useEffect, useState } from "react";

import harry from "../images/harry.jpg";

const Results = ({ searchQuery }) => {
	const [results, setResults] = useState([]);

	useEffect(() => {
		// Fetch the search results using the searchQuery prop
		// Update the results state with the fetched data
		// You can use the fetch API or any other HTTP library like Axios
	}, [searchQuery]);

	return (
		<div className="card" id="results" style={{ width: "18rem" }}>
			<div
				className="card-img-top"
				alt="Movie"
				style={{ backgroundImage: `url(${harry})` }}></div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">Title</li>
				<li class="list-group-item">Year</li>
			</ul>
		</div>
	);
};

export default Results;
