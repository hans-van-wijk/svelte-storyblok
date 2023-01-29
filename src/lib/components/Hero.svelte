<script>
  import { storyblokEditable } from '@storyblok/svelte';

  export let blok;
</script>

<div class="hero" use:storyblokEditable={blok} >
  <h1 class="heading hxxl">{blok.title}</h1>
  <p class="subtitle">{blok.subtitle}</p>
</div>

<style>
	.hero {
		min-height: 85vh;
		display: flex;
		align-items: center;
	}
	.subtitle {
		text-transform: uppercase;
		letter-spacing: 0.1em;
		padding: 0;
		line-height: 1;
	}
</style>