<script context="module">
	import BASE_URL from '$lib/baseUrl.js';

	export async function load({ params, fetch }) {
		const res = await fetch(`/api/posts/${params.id}`);

		if (res.ok) {
			return {
				props: {
					reponse: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(res.statusText)
		};
	}
</script>

<script>
	export let reponse;

	const { sucess, post } = reponse;
</script>

<section class="post">
	<a href="/">Back</a>

	<h2>{post.title}</h2>
	<p>{post.desc}</p>
</section>

<style>
	a {
		display: inline-block;
		color: var(--text-color);
		font-weight: 600;
		border: 1px dotted #444;
		border-radius: 5px;
		padding: 10px;
		margin-top: 5px;
	}

	h2 {
		margin: 20px 0;
	}
	p {
		line-height: 1.6;
	}
</style>
