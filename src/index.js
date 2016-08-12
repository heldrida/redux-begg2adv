import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import apiKeys from '../api_keys';
import SearchBar from './components/search_bar';

const API_KEY = apiKeys.youtube_api;

YTSearch({ key: API_KEY, term: 'skateboards' }, function (data) {
	console.log(data);
});

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('.container'));