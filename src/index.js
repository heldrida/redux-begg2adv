import React from 'react';
import ReactDOM from 'react-dom';
import apiKeys from '../api_keys';

const API_KEY = apiKeys.youtube_api;

const App = () => {
	return <div>Hi!</div>
}

ReactDOM.render(<App />, document.querySelector('.container'));