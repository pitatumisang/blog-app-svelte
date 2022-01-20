import BASE_URL from '$lib/baseUrl.js';
import axios from 'axios';

export async function get() {
	const res = await axios.get(`${BASE_URL}/posts`);

	return {
		status: res.status,
		body: res.data
	};
}

export async function post({ params }) {
	return {
		status: 201,
		body: {}
	};
}
