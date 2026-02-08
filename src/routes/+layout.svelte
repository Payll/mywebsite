<script lang="ts">
	import { onMount } from 'svelte';
	import { initLocale } from '$lib/locale';

	onMount(() => {
		initLocale();
	});
</script>

<slot />
