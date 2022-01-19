<script>
	const user = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	let isPasswordMatch = true;

	const handleSubmit = async () => {
		if (user.password !== user.confirmPassword) {
			isPasswordMatch = false;
		}

		if (!isPasswordMatch) {
			user.password = '';
			user.confirmPassword = '';
			return;
		}

		const createduser = await fetch('/api/user/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});
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
			<div class:error={isPasswordMatch} class="form-control">
				<label for="password">Password</label>

				<div class:error={!isPasswordMatch}>
					<input type="password" bind:value={user.password} name="password" id="password" />
				</div>
			</div>
			<div class="form-control">
				<label for="confirm-password">Confirm Password</label>
				<div class:error={!isPasswordMatch}>
					<input
						type="password"
						bind:value={user.confirmPassword}
						name="confirm-password"
						id="confirm-password"
					/>
				</div>
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

	.form-control .error input {
		border: 1px solid red;
	}
</style>
