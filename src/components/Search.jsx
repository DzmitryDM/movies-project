import React from "react";

class Search extends React.Component {
	state = {
		search: '',
		type: 'all',
	};

	handlerSearch = (e) => {
		this.setState({ search: e.target.value });
	};
	handKey = (e) => {
		if (e.key === "Enter") {
			this.props.searchMovie(this.state.search,this.state.type);
		}
	};

    handleType = (e) => {
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => {
                this.props.searchMovie(this.state.search, this.state.type);
            }
        );
    };

	render() {
		return (
			<div className="row">
				<input
					className="validate"
					placeholder="Search"
					type="search"
					value={this.state.search}
					onChange={this.handlerSearch}
					onKeyDown={this.handKey}
				/>
				<button
					className="btn #283593 indigo darken-3"
					onClick={() =>
						this.props.searchMovie(
                  this.state.search,this.state.type)
					}
				>
					Search
				</button>
				<div className="typeMovie ">
	
						<label>
							<input
								className="with-gap "
								name="type"
								type="radio"
								data-type="all"
								onChange={this.handleType}
								checked={this.state.type === "all"}
							/>
							<span >All</span>
						</label>
			
						<label>
							<input
								className="with-gap "
								name="type"
								type="radio"
								data-type="movie"
								onChange={this.handleType}
								checked={this.state.type === "movie"}
							/>
							<span className="span">Movies Only</span>
						</label>
				
						<label>
							<input
								className="with-gap "
								name="type"
								type="radio"
								data-type="series"
								onChange={this.handleType}
								checked={this.state.type === "series"}
							/>
							<span>Series Only</span>
						</label>
					
				</div>
			</div>
		);
	}
}

export default Search;







