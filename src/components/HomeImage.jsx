import React from "react";

import cinema from "../images/home_cinema-gold.svg";

const HomeImage = () => {
	return (
		<div className="img__wrapper" id="home__img">
			<img className="" src={cinema} alt="" width="250px" />
			<h2>
				Let's watch a{" "}
				<a className="movie" href="#">
					Movie!
				</a>
			</h2>
		</div>
	);
};

export default HomeImage;
