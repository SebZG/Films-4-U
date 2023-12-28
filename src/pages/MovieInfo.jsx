import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieInfo = () => {
	const { id } = useParams();
	const [movieInfo, setMovieInfo] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	//! GET MOVIE DATA
	async function getMovieInfo() {
		try {
			setLoading(true);

			const apiKEY = process.env.REACT_APP_API_KEY;
			const apiURL = `https://www.omdbapi.com/?apikey=${apiKEY}&i=${id}`;

			const { data } = await axios.get(apiURL);
			if (data) {
				setMovieInfo(data);
			}
		} catch (error) {
			setError("Could not fetch your movie data. Please try again...");
			console.error(error);
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 1500);
		}
	}

	useEffect(() => {
		getMovieInfo();
	}, []);

	return (
		<div className="container" id="movieInfo">
			<div className="row">
				<div className="col">
					{/* <Link to="/movies">
						<i class="fa-solid fa-circle-chevron-left"></i>
					</Link> */}
					{loading ? (
						<div className="card skeleton">
							<div className="row g-0">
								<div className="col-md-4">
									<div className="img-fluid rounded-start placeholder-glow">
										<div className="poster__skeleton placeholder"></div>
									</div>
								</div>
								<div class="col-md-8">
									<div className="card-body placeholder-glow">
										<div className="infoTitle__wrapper placeholder-glow">
											<h3 className="card-title h3-skeleton placeholder"></h3>
										</div>
										<p className="card-text yearRatingRuntime placeholder-glow">
											<small className="text-body-secondary small-skeleton placeholder"></small>
											<small className="text-body-secondary small-skeleton placeholder"></small>
											<small className="text-body-secondary small-skeleton placeholder"></small>
										</p>
										<p className="card-text plot p-skeleton placeholder"></p>
									</div>
								</div>
							</div>
						</div>
					) : error ? (
						<div className="errorMessage">Error: {error}</div>
					) : (
						<div className="card">
							<div className="row g-0">
								<div className="col-md-4">
									<div
										className="img-fluid rounded-start"
										alt={movieInfo.Title}
										style={{
											backgroundImage: `url(${movieInfo.Poster})`,
										}}></div>
								</div>
								<div class="col-md-8">
									<div className="card-body">
										<div className="infoTitle__wrapper">
											<h3 className="card-title">{movieInfo.Title}</h3>
										</div>
										<div className="ratingsInfo__wrapper">
											<p className="card-text yearRatingRuntime">
												<small className="text-body-secondary">
													{movieInfo.Year}
												</small>
												<span></span>
												<small className="text-body-secondary">
													{movieInfo.Rated}
												</small>
												<span></span>
												<small className="text-body-secondary">
													{movieInfo.Runtime}
												</small>
											</p>
											<div className="movie__rating">
												<i class="fa-solid fa-star"></i>
												<span className="white">{movieInfo.imdbRating}</span>
												<span className="total">/10</span>
											</div>
										</div>
										<p className="card-text plot">{movieInfo.Plot}</p>
										<p className="card-text genre">{movieInfo.Genre}</p>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default MovieInfo;
