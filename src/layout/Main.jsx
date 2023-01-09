import axios from "axios";
import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

   const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
	state = {
		movies: [],
      loading:true,
	};

	componentDidMount() {
		axios
			.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=all`)
			.then((response) => {
				this.setState({ movies: response.data.Search,loading:false });
			});
	}

	searchMovie = async (str, type = "all") => {
      this.setState({loading:true})
		const response = await axios.get(
			`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
				type !== "all" ? `&type=${type}` : ""
			}`
		);

		this.setState({ movies: response.data.Search,loading:false });
	};

	render() {
      const{movies,loading}=this.state
		return (
			<main className="container content">
				<Search searchMovie={this.searchMovie} />
				{loading ? (
					<Preloader />
				) : (
					<Movies movies={movies} />
				)}
			</main>
		);
	}
}

export default Main;
