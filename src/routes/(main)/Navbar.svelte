<script>
	import Button from '$lib/components/Button.svelte';
</script>

<nav class="w-full max-w-screen-xl mx-auto grid grid-cols-2 py-2">
	<div>
		<img src="/logo_horizontal.png" alt="Logo" class="h-[60px]" />
	</div>
	<div class="flex items-center gap-4 justify-end">
		<a href="/">Home</a>
		<a href="/company">Company</a>
		<a href="/dashboard">
			<Button type="FILL">Get Started</Button>
		</a>
	</div>
</nav>
