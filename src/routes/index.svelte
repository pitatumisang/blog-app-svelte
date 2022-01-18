<script context="module">
	export const load = async ({ params, url, fetch, session, context }) => {
		const res = await fetch('/api/posts');

		if (res.ok) {
			return {
				props: {
					response: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load url`)
		};
	};
</script>

<script>
	import Post from '../components/Post.svelte';

	export let response;
</script>

<svelte:head>
	<title>Blister Media</title>
</svelte:head>

<main>
	<aside>
		<ul>
			<li>
				<a href="/">All Posts </a>
			</li>
			<li>
				<a href="/">My Posts </a>
			</li>
			<li>
				<a href="/">Top Posts </a>
			</li>
		</ul>
	</aside>

	<section class="content-box">
		<h3>All Posts</h3>
		<div class="post-list">
			<Post {response} />
		</div>
	</section>
</main>

<style>
	main {
		display: flex;
	}
	aside {
		height: 100%;
		background-color: #252937;
		width: 280px;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	}

	aside li {
		list-style: none;
		padding: 8px;
		border-bottom: 1px dotted #444;
	}

	aside li:first-child {
		font-weight: 600;
	}

	aside li a {
		color: var(--text-color);
		text-decoration: none;
	}

	aside li:hover {
		background-color: #272d47;
		width: 100%;
		text-decoration: underline;
		border-radius: 5px;
	}

	.content-box {
		flex: 1;
		margin-left: 30px;
	}

	.content-box h3 {
		margin-bottom: 20px;
		letter-spacing: 1.2px;
	}

	.post-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}
</style>
