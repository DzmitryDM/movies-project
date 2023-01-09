import React from "react";

const Movie = ({ Title, Year, imdbID, Type, Poster }) => {
	
	return (
		<>
			<div id={imdbID} className="card movie">
				<div className="card-image waves-effect waves-block waves-light">
					<img className="activator" src={Poster} alt=''/>
				</div>
				<div className="card-content">
					<span className="card-title activator grey-text text-darken-4">
						{Title}
					</span>
					<p>{Year}<span className="right">{Type}</span></p>
				</div>
			</div>
		</>
	);
};

export default Movie;
