import React from 'react';
import ReactDOM from 'react-dom';
import apiKeys from '../api_keys';
import SearchBar from './components/search_bar';

const API_KEY = apiKeys.youtube_api;

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('.container'));