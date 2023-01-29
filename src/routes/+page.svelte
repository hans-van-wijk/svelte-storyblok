<script>
    import { onMount } from "svelte";
    import { useStoryblokBridge, StoryblokComponent } from "@storyblok/svelte";
 
    export let data;
  
    


    onMount(() => {
        useStoryblokBridge(
            data.story.id,
            (newStory) => (data.story = newStory)
        );
    });
</script>
 
 <div>
    {#if data.story}
        <StoryblokComponent blok={data.story.content} />
    {/if}
</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
