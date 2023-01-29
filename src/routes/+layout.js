import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";
import Feature from '$lib/components/Feature.svelte';
import Grid from '$lib/components/Grid.svelte';
import Page from '$lib/components/Page.svelte';
import Teaser from '$lib/components/Teaser.svelte';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  storyblokInit({
    accessToken: "GQsMeFOoA5MlirZq7i0IZwtt",
    use: [apiPlugin],
    components: {
      feature: Feature,
      grid: Grid,
      page: Page,
      teaser: Teaser,
    },
    apiOptions: {
      https: true,
    },
  });
  let storyblokApi = await useStoryblokApi();
 
  return {
    storyblokApi: storyblokApi,
  };
}


