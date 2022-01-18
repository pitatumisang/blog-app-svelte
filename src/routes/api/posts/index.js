import BASE_URL from '$lib/baseUrl.js';

export async function get() {
	const posts = await fetch(`${BASE_URL}/posts`, {
		method: 'GET'
	});

	return {
		body: await posts.json()
	};
}
