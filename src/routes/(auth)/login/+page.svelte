<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import type { UserLogin } from '$lib/model/user';

	let data: UserLogin = {
		username: '',
		password: ''
	};

	export let form;

	if (form?.success) {
		goto('/dashboard');
	}
</script>

<section id="login">
	<div class="min-h-screen grid grid-cols-1 md:grid-cols-2">
		<div
			class="bg-gradient-to-tr from-brand to-brand/90 animate-gradient-xy px-8 hidden md:block"
		></div>
		<div class="bg-[url('/idcardku_bg.png')] bg-center px-8">
			<div
				class="w-full max-w-screen-sm pb-8 mx-auto p-5 rounded-xl mt-48 border-2 border-brand bg-white shadow-3xl"
			>
				<h1 class="font-bold text-3xl text-center text-brand">Login</h1>
				<p class="text-center">Login to create your first identifier</p>
				<hr class="border-2 my-2" />
				{#if form?.success == true}
					<div class="border-l-4 border-brand px-5 py-2">
						<h1 class="font-bold">Success</h1>
						<p>
							You should redirected to dashboard. <a href="/dashboard" class="underline"
								>Click here</a
							>
						</p>
					</div>
				{:else if form?.success == false}
					<div class="border-l-4 border-red-500 px-5 py-2">
						<h1 class="font-bold">Error</h1>
						<p>
							{form?.error}
						</p>
					</div>
				{/if}
				<form action="/login" method="post" class="space-y-2 mt-5">
					<div>
						<label for="username">Username/Email</label>
						<Input
							styleType="OUTLINE"
							type="text"
							name="username"
							id="username"
							placeholder="Username or Email"
							bind:value={data.username}
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
					<div class="!mt-8">
						<Button styleType="FILL" class="w-full">Login</Button>
					</div>
					<div>
						<p>
							Doesn't have account yet? <a href="/register" class="text-brand underline"
								>Register here</a
							>
						</p>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
