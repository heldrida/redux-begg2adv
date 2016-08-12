import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import apiKeys from '../api_keys';
import SearchBar from './components/search_bar';

const API_KEY = apiKeys.youtube_api;

class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos: [] };
		
		YTSearch({ key: API_KEY, term: 'skateboards' }, (videos) => {
			console.log(videos);
			// syntax sugar key=value keyword, can be condensed to one
			this.setState({ videos });
		});

	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));