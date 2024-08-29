<script lang="ts">
	import Input from '$lib/components/Input.svelte';

	export let data;

	let abc: string;
</script>

<section id="home" class="p-5">
	<div>
		<h1 class="font-medium text-xl">Hi, {data.user.full_name}</h1>
		<form action="/dashboard?/logout" method="post">
			<button class="text-red-500">Logout</button>
		</form>
	</div>
</section>

<section id="profile" class="p-5">
	<div>
		<h1 class="font-medium text-2xl">Profile Settings</h1>
		<form
			action="?/profile"
			method="post"
			class="p-5 rounded-xl bg-brand text-white w-full max-w-screen-sm"
		>
			<div>
				<label for="status">Status</label>
				<Input styleType="OUTLINE" bind:value={abc} class="rounded-xl" />
			</div>
		</form>
	</div>
</section>
