import React from "react";
import { Link } from "react-router-dom";

import cinema from "../images/home_cinema-gold.svg";

const Home = () => {
	return (
		<div className="container home__container">
			<div className="row home__row">
				<div className="col home__col">
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
