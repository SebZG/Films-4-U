import React from "react";

import harry from "../images/harry.jpg";

const Movies = () => {
	return (
		<div className="container" id="movies">
			<div className="row">
				<div className="col">
					<div className="card" id="movies" style={{ width: "18rem" }}>
						<div
							className="card-img-top"
							alt="Movie"
							style={{ backgroundImage: `url(${harry})` }}></div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">Title</li>
							<li class="list-group-item">Year</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Movies;
