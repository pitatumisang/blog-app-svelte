<script>
	import '../styles/global.css';
</script>

<header>
	<nav class="container navbar">
		<h1>
			<a href="/" class="brand">
				<img src="/logo-1.png" alt="logo" />
			</a>
		</h1>
		<div>
			<a href="/">Posts</a>
			<a href="/register" class="btn btn-primary">Register</a>
		</div>
	</nav>
</header>

<main class="container">
	<slot />
</main>

<footer>
	<p>Blister Media &copy; 2022</p>
</footer>

<style>
	header {
		border-bottom: 1px solid #272d47;
		padding: 20px 0;
		margin-bottom: 20px;
	}

	header a {
		text-decoration: none;
		color: var(--heading-color);
	}

	.brand img {
		width: 46px;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navbar div a:first-child {
		text-decoration: underline;
		margin-right: 30px;
	}
	main {
		min-height: calc(100vh - 184px);
	}

	footer {
		background-color: #252937;
		text-align: center;
		border-top: 1px solid #272d47;
		padding: 20px 0;
		margin-top: 20px;
	}
</style>
