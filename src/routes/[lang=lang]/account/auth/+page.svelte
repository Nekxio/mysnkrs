<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte';
	import { base } from '$app/paths';
	import { enhance } from '$app/forms';

	let showRegister: boolean = false;
	let password: string = '';
	let confirmPassword: string = '';
	let passwordsMatch: boolean = false;

	function toggleForm(): void {
		showRegister = !showRegister;
	}

	$: {
		passwordsMatch = password === confirmPassword;
	}
</script>

<div class="hero relative left-1/2 w-screen h-fit -translate-x-1/2 transform overflow-hidden min-h-screen">
	<div class="hero-content max-w-full p-0 w-full h-full flex-row">
		<div class=" flex flex-col items-center justify-center w-1/2">
			{#if showRegister}
				<h1 class="text-3xl font-bold mb-6">{$LL.account.auth.register()}</h1>
				<div class="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 dark:bg-base-200">
					<form
						method="post"
						name="register"
						action="?/signup"
						enctype="multipart/form-data"
						class="card-body"
						use:enhance
					>
						<div class="flex flex-row space-x-4 w-full">
							<div class="w-1/2">
								<label for="first_name" class="label">
									<span class="label-text">{$LL.account.auth.firstName()}</span>
								</label>
								<input
									name="first_name"
									type="text"
									placeholder={$LL.account.auth.firstName()}
									class="input input-bordered w-full"
									required
								/>
							</div>
							<div class="w-1/2">
								<label for="last_name" class="label">
									<span class="label-text">{$LL.account.auth.lastName()}</span>
								</label>
								<input
									name="last_name"
									type="text"
									placeholder={$LL.account.auth.lastName()}
									class="input input-bordered w-full"
									required
								/>
							</div>
						</div>
						<label for="email" class="label">
							<span class="label-text">{$LL.account.auth.email()}</span>
						</label>
						<input
							name="email"
							type="email"
							placeholder={$LL.account.auth.email()}
							class="input input-bordered"
							required
						/>
						<label for="password" class="label">
							<span class="label-text">{$LL.account.auth.password()}</span>
						</label>
						<input
							name="password"
							type="password"
							placeholder={$LL.account.auth.password()}
							class="input input-bordered"
							required
							bind:value={password}
						/>
						<label for="confirmPassword" class="label">
							<span class="label-text">{$LL.account.auth.registerSection.confirmPassword()}</span>
						</label>
						<input
							name="confirmPassword"
							type="password"
							placeholder={$LL.account.auth.registerSection.confirmPassword()}
							class="input input-bordered"
							required
							bind:value={confirmPassword}
						/>
						<button type="submit" class="btn btn-primary mt-6" disabled={!passwordsMatch}
							>{$LL.account.auth.register()}</button
						>
					</form>
				</div>
			{:else}
				<h1 class="text-3xl font-bold mb-6">{$LL.account.auth.login()}</h1>
				<div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-base-200">
					<form name="login" method="post" action="?/login" class="card-body">
						<label for="email" class="label">
							<span class="label-text">{$LL.account.auth.email()}</span>
						</label>
						<input
							name="email"
							type="email"
							placeholder={$LL.account.auth.email()}
							class="input input-bordered"
							required
						/>

						<label class="form-control">
							<span class="label label-text">{$LL.account.auth.password()}</span>
							<input
								name="password"
								type="password"
								placeholder={$LL.account.auth.password()}
								class="input input-bordered"
								required
							/>
							<a href="/{base}/{$locale}/account/resetpassword" class="label label-text-alt w-fit hover:link"
								>{$LL.account.auth.loginSection.forgotPassword()}</a
							>
						</label>
						<button type="submit" class="btn btn-primary mt-6">{$LL.account.auth.login()}</button>
					</form>
				</div>
			{/if}
		</div>

		{#if showRegister}
			<div class="flex flex-col items-center justify-center w-1/2 bg-primary h-full p-16 text-center gap-8 text-white">
				<h2 class="text-4xl font-bold text-balance">{$LL.account.auth.registerSection.alreadyAccountTitle()}</h2>
				<p class="text-balance">{$LL.account.auth.registerSection.alreadyAccountDescription()}</p>
				<button type="button" class="btn btn-outline btn-secondary" on:click={toggleForm}>
					{$LL.account.auth.login()}
				</button>
			</div>
		{:else}
			<div class="flex flex-col items-center justify-center w-1/2 bg-primary h-full p-16 text-center gap-8 text-white">
				<h2 class="text-4xl font-bold text-balance">{$LL.account.auth.loginSection.noAccountTitle()}</h2>
				<p class="text-balance">{$LL.account.auth.loginSection.noAccountDescription()}</p>
				<button type="button" class="btn btn-outline btn-secondary" on:click={toggleForm}>
					{$LL.account.auth.register()}
				</button>
			</div>
		{/if}
	</div>
</div>
