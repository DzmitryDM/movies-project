import React from "react";
import Movie from "./Movie";

const Movies = ({movies=[]}) => {
	
	return (
		<div className="movies">
			{movies.length ? movies.map((movie) => (
				<Movie key={movie.imdbID} {...movie} />
            
			)):<h4>Nothing found</h4>
         }
		</div>
	);
};

export default Movies;
