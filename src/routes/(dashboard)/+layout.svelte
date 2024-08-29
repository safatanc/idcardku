<script>
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from './Sidebar.svelte';
</script>

<div>
	<div class="flex">
		<div class="fixed">
			<Sidebar />
		</div>
		<div class="ml-0 md:ml-[200px] min-h-screen">
			<slot />
		</div>
	</div>
	<div class="bg-gradient-to-tr from-brand to-brand/90 text-white">
		<Footer />
	</div>
</div>
