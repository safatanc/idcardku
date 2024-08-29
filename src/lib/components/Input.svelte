<script lang="ts">
	export let styleType: 'FILL' | 'OUTLINE';
	export let value: any;
</script>

{#if styleType == 'FILL'}
	<input
		type="text"
		bind:value
		{...$$restProps}
		class="w-full px-5 py-2 rounded-full border-2 border-transparent bg-gradient-to-r from-brand to-brand/70 animate-gradient-xy text-white placeholder:text-white/70 outline-none"
	/>
{/if}

{#if styleType == 'OUTLINE'}
	<input
		type="text"
		bind:value
		{...$$restProps}
		class="w-full px-5 py-2 rounded-full border-2 border-brand bg-white text-black placeholder:text-brand/70 outline-none"
	/>
{/if}
