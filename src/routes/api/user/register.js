import BASE_URL from '$lib/baseUrl.js';

export const post = async (request) => {
	const userData = request.body;
	const response = await fetch(`${BASE_URL}/user/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(userData)
	});

	console.log(response);

	return {
		status: 200,
		body: {}
	};
};
