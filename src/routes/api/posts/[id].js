import BASE_URL from '$lib/baseUrl.js';
import axios from 'axios';

export const get = async ({ params }) => {
	const { id } = params;

	const res = await axios(`${BASE_URL}/posts/${id}`);

	return {
		status: res.status,
		body: res.data
	};
};
