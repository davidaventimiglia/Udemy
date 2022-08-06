import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
	async onSearchSubmit = term => {
		const response = axios.get('https://api.unsplash.com/search/photos', {
			params: {
				query: term
			},
			headers: {
				Authorization: 'Client-ID Pz99Fxz3e_heN8SBVXWy6jCD_g_JSRSBV68TJMbUWxw'
			}
		});
		console.log();
	}

	render () {
		return <div className="ui container" style={{marginTop: '10px'}}>
						 <SearchBar onSubmit={this.onSearchSubmit}/>
					 </div>;
	}
}

export default App;
