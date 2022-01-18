<script>
	export let response;

	const { success, count, posts } = response;
</script>

{#if count === 0}
	<h3>There are no post yet</h3>
{:else}
	{#each posts as post}
		<div class="post">
			<div class="post-details">
				<h4 class="post-title">{post.title}</h4>
				<p class="post-desc">{post.desc}</p>
				<a sveltekit:prefetch href={`/${post._id}`}>
					<small>Read More >> </small>
				</a>
			</div>

			<div class="creator">
				<small class="creator-name">pitatumisang</small>
				<small class="creation-time">2h ago</small>
			</div>
		</div>
	{/each}
{/if}

<style>
	.post {
		background-color: #2d3343;
		border-radius: 5px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	}

	.post a {
		color: var(--heading-color);
		font-weight: 600;
	}

	.post-details {
		padding: 20px;
	}

	.post-title {
		margin-bottom: 15px;
		color: var(--heading-color);
	}

	.post-desc {
		margin-bottom: 15px;
		color: var(--text-color);
	}

	.creator {
		background-color: #272d47;
		padding: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.creator-name {
		display: block;
		font-weight: 600;
	}
</style>
