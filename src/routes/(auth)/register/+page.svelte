<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import type { UserCreate } from '$lib/model/user';

	let data: UserCreate = {
		email: '',
		full_name: '',
		username: '',
		password: '',
		passwordConfirm: ''
	};

	let errorViewDetail = false;

	export let form;
</script>

<section id="register">
	<div class="min-h-screen grid grid-cols-1 md:grid-cols-2">
		<div
			class="bg-gradient-to-tr from-brand to-brand/90 animate-gradient-xy px-8 hidden md:block"
		></div>
		<div class="bg-[url('/idcardku_bg.png')] bg-center px-8">
			<div
				class="w-full max-w-screen-sm pb-8 mx-auto p-5 rounded-xl mt-48 border-2 border-brand bg-white shadow-3xl"
			>
				<h1 class="font-bold text-3xl text-center text-brand">Register</h1>
				<p class="text-center">Register to create your first identifier</p>
				<hr class="border-2 my-2" />
				{#if form?.success == true}
					<div class="border-l-4 border-brand px-5 py-2">
						<h1 class="font-bold">Success</h1>
						<p>Please check your email to verify your account.</p>
					</div>
				{:else if form?.success == undefined}
					<div class="border-l-4 border-red-500 px-5 py-2">
						<h1 class="font-bold">Error</h1>
						<p>{form?.error}</p>
						<button
							class="text-sm text-red-500 underline"
							on:click={() => (errorViewDetail = !errorViewDetail)}>View Details</button
						>
						{#if errorViewDetail && form?.detail}
							<p>Detail: {form.detail}</p>
						{/if}
					</div>
				{/if}
				<form action="/register" method="post" class="space-y-2 mt-5">
					<div>
						<label for="username">Username</label>
						<Input
							styleType="OUTLINE"
							type="text"
							name="username"
							id="username"
							placeholder="Username"
							bind:value={data.username}
							required
						/>
					</div>
					<div>
						<label for="email">Email</label>
						<Input
							styleType="OUTLINE"
							type="email"
							name="email"
							id="email"
							placeholder="user@email.com"
							bind:value={data.email}
							required
						/>
					</div>
					<div>
						<label for="full_name">Full Name</label>
						<Input
							styleType="OUTLINE"
							type="text"
							name="full_name"
							id="full_name"
							placeholder="Full Name"
							bind:value={data.full_name}
							required
						/>
					</div>
					<div>
						<label for="password">Password</label>
						<Input
							styleType="OUTLINE"
							type="password"
							name="password"
							id="password"
							placeholder="P@ssw0rd"
							bind:value={data.password}
							required
						/>
					</div>
					<div>
						<label for="passwordConfirm">Confirm Password</label>
						<Input
							styleType="OUTLINE"
							type="password"
							name="passwordConfirm"
							id="passwordConfirm"
							placeholder="P@ssw0rd"
							bind:value={data.passwordConfirm}
							required
						/>
					</div>
					<div class="!mt-8">
						<Button styleType="FILL" class="w-full">Register</Button>
					</div>
					<div>
						<p>
							Already have an account? <a href="/login" class="text-brand underline">Login here</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
