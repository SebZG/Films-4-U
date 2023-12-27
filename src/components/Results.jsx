import React, { useEffect, useState } from "react";
import axios from "axios";

import horror from "../images/undraw_horror_movie_3988.svg"

const Results = ({ searchQuery }) => {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	//! GET MOVIES
	async function getMovies() {
		try {
			setLoading(true);

			const apiKEY = process.env.REACT_APP_API_KEY;
			const apiURL = `https://www.omdbapi.com/?apikey=${apiKEY}&s=${searchQuery}`;

			const { data } = await axios.get(apiURL);
			if (data && data.Search) {
				setResults(data.Search);
			}
		} catch (error) {
			setError("Could not find your movie. Please try again...");
			console.error(error);
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 1500);
		}
	}
	//! SORT MOVIES
	const sort = (sort) => {
		if (sort === "OLD_TO_NEW") {
			setResults(results.slice().sort((a, b) => a.Year - b.Year));
		}
		if (sort === "NEW_TO_OLD") {
			setResults(results.slice().sort((a, b) => b.Year - a.Year));
		}
	};

	useEffect(() => {
		getMovies();
	}, [searchQuery]);

	return (
		<div id="results__wrapper">
			<div id="sortBar">
				<h3 id="searchTerm">
					Search Results For: <span>{searchQuery}</span>
				</h3>
				<select
					id="sort"
					defaultValue="DEFAULT"
					onChange={(e) => sort(e.target.value)}>
					<option value="DEFAULT" disabled>
						Sort
					</option>
					<option value="OLD_TO_NEW">Old to New </option>
					<option value="NEW_TO_OLD">New to Old </option>
				</select>
			</div>
			<div id="results">
				{results.length === 0 ? (
					<img className="horror" src={horror} alt=""/>
				) : loading ? (
					new Array(8).fill(0).map((_, index) => (
						<div key={index} className="card skeleton">
							<div className="card-img-top placeholder-glow" alt="Movie">
								<div className="poster__skeleton placeholder"></div>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item placeholder-glow">
									<div className="title__skeleton placeholder"></div>
								</li>
								<li className="list-group-item placeholder-glow">
									<div className="year__skeleton placeholder"></div>
								</li>
							</ul>
						</div>
					))
				) : error ? (
					<div className="errorMessage">Error: {error}</div>
				) : (
					results.slice(0, 8).map((movie) => (
						<div key={movie.imdbID} className="card results">
							<div
								className="card-img-top"
								alt={movie.Title}
								style={{ backgroundImage: `url(${movie.Poster})` }}></div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">{movie.Title}</li>
								<li className="list-group-item">{movie.Year}</li>
							</ul>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Results;
