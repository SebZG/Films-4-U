import React, { useEffect, useState } from "react";
import axios from "axios";

import HomeImage from "./HomeImage";

const Results = ({ searchQuery }) => {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function getMovies() {
		try {
			setLoading(true);

			const apiKEY = "fe2dc3ba";
			const apiURL = `https://www.omdbapi.com/?apikey=${apiKEY}&s=${searchQuery}`;

			const { data } = await axios.get(apiURL);
			if (data && data.Search) {
				setResults(data.Search);
			}
		} catch (error) {
			setError("Could not find your movie. Please try again.");
			console.error(error);
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		}
	}

	useEffect(() => {
		getMovies();
	}, [searchQuery]);

	return (
		<div id="results">
			{results.length === 0 ? (
				<HomeImage />
			) : loading ? (
				new Array(8).fill(0).map((_, index) => (
					<div key={index} className="card skeleton">
						<div className="card-img-top" alt="Movie">
							<div className="poster__skeleton"></div>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<div className="title__skeleton"></div>
							</li>
							<li className="list-group-item">
								<div className="year__skeleton"></div>
							</li>
						</ul>
					</div>
				))
			) : error ? (
				<div>Error: {error}</div>
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
	);
};

export default Results;
