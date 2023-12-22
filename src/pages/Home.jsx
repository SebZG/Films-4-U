import React from "react";

import cinema from "../images/home_cinema-gold.svg";

const Home = () => {
	return (
		<div className="container" id="home">
			<div className="row">
				<div className="col">
					<img className="" src={cinema} alt="" width="250px" />
					<h2>
						Let's watch a <a className="movie" href="#">Movie!</a>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Home;
