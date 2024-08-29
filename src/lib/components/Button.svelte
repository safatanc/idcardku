<script lang="ts">
	export let styleType: 'FILL' | 'OUTLINE' | 'GLASS' | 'TRANSPARENT';
</script>

{#if styleType == 'FILL'}
	<button
		on:click
		{...$$restProps}
		class={`border-2 border-transparent bg-gradient-to-tr from-brand to-brand/50 animate-gradient-xy rounded-full text-white px-5 py-2 hover:shadow-lg transition duration-500 ${$$restProps.class}`}
	>
		<slot />
	</button>
{/if}

{#if styleType == 'OUTLINE'}
	<button
		on:click
		{...$$restProps}
		class={`border-2 border-brand rounded-full text-brand px-5 py-2 hover:shadow-lg transition duration-500 ${$$restProps.class}`}
	>
		<slot />
	</button>
{/if}

{#if styleType == 'GLASS'}
	<button
		on:click
		{...$$restProps}
		class={`border-2 border-transparent backdrop-blur-sm bg-white/30 rounded-full text-brand px-5 py-2 hover:shadow-lg transition duration-500 ${$$restProps.class}`}
	>
		<slot />
	</button>
{/if}

{#if styleType == 'TRANSPARENT'}
	<button
		on:click
		{...$$restProps}
		class={`border-2 border-transparent rounded-full text-brand px-5 py-2 hover:bg-brand/5 transition duration-500 ${$$restProps.class}`}
	>
		<slot />
	</button>
{/if}
