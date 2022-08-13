import axios from 'axios';

const KEY = 'AIzaSyCmIU67sqiWIvkqjJ8nAcK8MZrr2NNS2MU';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
		type: 'video'
	}
});
