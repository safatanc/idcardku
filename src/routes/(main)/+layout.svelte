<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from './Navbar.svelte';
</script>

<div>
	<div class="fixed top-0 lef-0 w-full">
		<Navbar />
	</div>
	<slot />
	<div class="bg-gradient-to-tr from-brand to-brand/90 text-white">
		<Footer />
	</div>
</div>
