import BASE_URL from '$lib/baseUrl.js';

export const get = async ({ params }) => {
	const { id } = params;

	const response = await fetch(`${BASE_URL}/posts/${id}`);

	return {
		status: 200,
		body: await response.json()
	};
};
