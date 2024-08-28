<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section id="home">
	<div class="bg-gradient-to-tr from-brand/25 to-white animate-gradient-xy min-h-screen">
		<div class="mx-auto w-full max-w-screen-lg text-center pt-56">
			<div class="space-y-2">
				<h1 class="font-medium text-7xl">
					Everything about
					<span class="text-gradient from-brand to-brand/50 font-bold">you</span>
				</h1>
				<h2 class="text-2xl">Introduce yourself and let them know how cool you are</h2>
			</div>
			<div class="mt-5">
				<a href="/dashboard">
					<Button type="FILL">Get Started</Button>
				</a>
				<Button type="TRANSPARENT">Learn More</Button>
			</div>
		</div>
	</div>
</section>
