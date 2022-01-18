<script>
	const user = {
		email: '',
		password: ''
	};

	const handleSubmit = () => {
		console.log('Submitting');
		console.log(user);
	};
</script>

<main>
	<section class="register-login">
		<h2>Log In</h2>
		<form on:submit|preventDefault={handleSubmit}>
			<div class="form-control">
				<label for="email">Email</label>
				<input type="email" bind:value={user.email} name="email" id="email" />
			</div>
			<div class="form-control">
				<label for="password">Password</label>
				<input type="password" bind:value={user.password} name="password" id="password" />
			</div>
			<button class="btn btn-primary">Log In</button>
		</form>
		<p>Require an account? <a href="/register">Register</a></p>
	</section>
</main>

<style>
	main {
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
