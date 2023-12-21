import logo from "../images/F4U-gold_1.png";

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className="container">
					<a className="navbar-brand" href="#">
						<img src={logo} alt="" width="60px" />
					</a>

					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Pricing
							</a>
						</li>
					</ul>
				</div>
				<div className="row input__row">
					<div className="col input__col">
						<h1>Browse our movies</h1>
						<div className="search__input--wrapper">
							<input
								type="text"
								placeholder="Search here..."
								className="search__input"
								onchange="onSearch(event)"
							/>
							<a href="#main__section" className="search__icon">
								<i
									className="fa-solid fa-magnifying-glass"
									onclick="onSearchIcon()"></i>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
