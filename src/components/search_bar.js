import React, { Component } from 'React';

class SearchBar extends Component {

	render() {

		return (
			<input onChange={ event => console.log(event.target.value) } />
		);

	}

};

export default SearchBar;