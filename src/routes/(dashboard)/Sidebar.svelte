<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	let hideNavbar = false;
</script>

{#if hideNavbar == false}
	<nav class="bg-brand text-white flex flex-col justify-between min-h-screen">
		<div class="w-[200px] p-5">
			<div>
				<a href="/">
					<img src="/logo_horizontal_bg_white.png" alt="Logo" class="rounded-xl" />
				</a>
			</div>
		</div>
		<div class="bg-red-500 p-5 pb-8">
			<form action="/dashboard?/logout" method="post">
				<Button styleType="FILL" class="from-red-500 to-red-400 w-full">Logout</Button>
			</form>
		</div>
	</nav>
{/if}
