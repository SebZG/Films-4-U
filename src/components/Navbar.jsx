import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import logo from "../images/F4U-gold_1.png";

const Navbar = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleSearch = (event) => {
		event.preventDefault();
		navigate(`/movies?search=${searchQuery}`);
	};

	return (
		<nav className="navbar" id="nav">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="" width="60px" />
				</Link>

				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to={`/movies?search=${searchQuery}`}>
							Movies
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Login
						</Link>
					</li>
				</ul>
			</div>

			<div className="row g-0 input__row">
				<div className="col-8 col-sm-6 col-md-6 col-lg-5 col-xl-4 input__col">
					<h1>Browse our movies</h1>
					<div className="search__input--wrapper">
						<form onSubmit={(e) => handleSearch(e)}>
							<input
								className="search__input"
								type="searchQuery"
								placeholder="Title..."
								value={searchQuery}
								onChange={(e) => handleInputChange(e)}
								onKeyUp={(e) => handleInputChange(e)}
							/>
							<button type="submit">
								<i className="fa-solid fa-magnifying-glass search__icon"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
