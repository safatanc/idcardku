<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Icon from '@iconify/svelte';
</script>

<section id="home">
	<div class="bg-gradient-to-tr from-brand/10 to-white animate-gradient-xy min-h-screen">
		<div class="mx-auto w-full max-w-screen-lg text-center pt-64">
			<div class="space-y-2">
				<h1 class="font-medium text-7xl">
					Everything about
					<span class="text-gradient from-brand to-brand/50 font-bold">you</span>
				</h1>
				<h2 class="text-2xl">Introduce yourself and let them know how cool you are</h2>
			</div>
			<div class="mt-5">
				<a href="/dashboard">
					<Button styleType="FILL">Get Started</Button>
				</a>
				<a href="#showcase">
					<Button styleType="TRANSPARENT">Learn More</Button>
				</a>
			</div>
		</div>
	</div>
</section>

<section id="showcase">
	<div class="bg-gradient-to-tr from-red-500/10 to-white min-h-screen pt-48">
		<div class="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative px-8">
			<div class="relative w-full max-w-xl mx-auto">
				<div
					class="w-24 aspect-square bg-gradient-to-tr from-brand to-brand/50 animate-gradient-xy p-2 rounded-full absolute top-0 left-0 -z-50"
				></div>
				<div
					class="w-24 aspect-square bg-gradient-to-tr from-red-500 to-red-500/50 animate-gradient-xy p-2 rounded-full absolute bottom-0 right-0 -z-50"
				></div>
				<div class="w-full aspect-[5/2] p-5 bg-white/30 backdrop-blur-3xl rounded-xl space-y-4">
					<div class="flex items-center space-x-4">
						<Icon
							icon="lucide:user-round-search"
							class="text-5xl bg-brand rounded-full p-2 text-white"
						/>
						<h1 class="font-bold text-2xl md:text-3xl text-black/70">Let others know you</h1>
					</div>
					<p>
						Describe everything about yourself that you want to let everyone know about your skills
						or anything.
					</p>
				</div>
			</div>
			<div class="hidden md:block"></div>
			<div class="absolute w-full h-full hidden lg:block">
				<div class="flex justify-center items-center h-full">
					<Icon icon="teenyicons:curved-connector-solid" class="text-[150px] text-brand" />
				</div>
			</div>
			<div class="hidden md:block"></div>
			<div class="relative w-full max-w-xl mx-auto">
				<div
					class="w-24 aspect-square bg-gradient-to-tr from-brand to-brand/50 animate-gradient-xy p-2 rounded-full absolute top-0 left-0 -z-50"
				></div>
				<div
					class="w-24 aspect-square bg-gradient-to-tr from-red-500 to-red-500/50 animate-gradient-xy p-2 rounded-full absolute bottom-0 right-0 -z-50"
				></div>
				<div class="w-full aspect-[5/2] p-5 bg-white/30 backdrop-blur-3xl rounded-xl space-y-4">
					<div class="flex items-center space-x-4">
						<Icon icon="lucide:file-json-2" class="text-5xl bg-brand rounded-full p-2 text-white" />
						<h1 class="font-bold text-2xl md:text-3xl text-black/70">Build your portfolio</h1>
					</div>
					<p>Write your portfolio so you can easily get a new job.</p>
				</div>
			</div>
		</div>
	</div>
</section>
