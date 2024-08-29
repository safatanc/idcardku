<script>
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from './Sidebar.svelte';
</script>

<div>
	<div class="flex">
		<div class="sticky">
			<Sidebar />
		</div>
		<div>
			<slot />
		</div>
	</div>
	<div class="bg-gradient-to-tr from-brand to-brand/90 text-white">
		<Footer />
	</div>
</div>
