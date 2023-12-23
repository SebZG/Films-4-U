import React from "react";
import { useLocation } from "react-router-dom";

import Results from "../components/Results";

const Movies = () => {
	const location = useLocation();
	const searchQuery = new URLSearchParams(location.search).get("search");

	return (
		<div className="container" id="movies">
			<div className="row">
				<div className="col">
					<Results searchQuery={searchQuery} />
				</div>
			</div>
		</div>
	);
};

export default Movies;
