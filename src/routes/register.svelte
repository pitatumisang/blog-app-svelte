<script>
	const user = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const handleSubmit = () => {
		console.log('Submitting');

		console.log(user);
	};
</script>

<main>
	<section class="register-login">
		<h2>Register</h2>
		<form on:submit|preventDefault={handleSubmit}>
			<div class="form-control">
				<label for="names">Names</label>
				<input type="text" bind:value={user.name} name="names" id="names" />
			</div>
			<div class="form-control">
				<label for="email">Email</label>
				<input type="email" bind:value={user.email} name="email" id="email" />
			</div>
			<div class="form-control">
				<label for="password">Password</label>
				<input type="password" bind:value={user.password} name="password" id="password" />
			</div>
			<div class="form-control">
				<label for="confirm-password">Confirm Password</label>
				<input
					type="password"
					bind:value={user.confirmPassword}
					name="confirm-password"
					id="confirm-password"
				/>
			</div>
			<button class="btn btn-primary">Register</button>
		</form>
		<p>Already have an account? <a href="/login">Log In</a></p>
	</section>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
	}
</style>
