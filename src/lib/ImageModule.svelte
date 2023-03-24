<!-- ImageModule.svelte -->
<script>
  export let src;
  export let alt;
  export let width;
  export let height;
</script>

{#if src.includes('.svg')}
  <svg {width} {height}>
    <use xlink:href={src} class=""/>
  </svg>
{:else}
  {#if src !== ""}
    <img src={src} alt={alt} width={width} {height}>
  {/if}
{/if}