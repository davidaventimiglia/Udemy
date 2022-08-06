import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID Pz99Fxz3e_heN8SBVXWy6jCD_g_JSRSBV68TJMbUWxw'
	}
});
