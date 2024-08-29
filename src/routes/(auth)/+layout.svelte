<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<div>
	<slot />
	<div class="bg-gradient-to-tr from-brand to-brand/90 text-white">
		<Footer />
	</div>
</div>
