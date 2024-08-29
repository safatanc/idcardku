<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';

	let hideNavbar = false;
</script>

{#if hideNavbar == false}
	<nav class="bg-brand text-white min-h-screen">
		<div class="w-[200px] p-5 space-y-4">
			<a href="/">
				<img src="/logo_horizontal_bg_white.png" alt="Logo" class="rounded-xl" />
			</a>
			<a
				href="#home"
				class={`${$page.url.pathname + $page.url.hash == '/dashboard#home' ? 'bg-white text-brand' : 'bg-white/10 text-white'} px-5 py-2 block rounded-xl transition duration-500`}
				>Home</a
			>
			<a
				href="#profile"
				class={`${$page.url.pathname + $page.url.hash == '/dashboard#profile' ? 'bg-white text-brand' : 'bg-white/10 text-white'} px-5 py-2 block rounded-xl transition duration-500`}
				>Profile</a
			>
		</div>
	</nav>
{/if}
