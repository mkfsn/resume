<script type="ts">
    import Project from "./Project.svelte";
    export let projects;
</script>

<section class="projects" id="projects">
    <h1>Projects</h1>
    {#each projects as project}
        <Project {project}/>
    {/each}
</section>

<style lang="scss">
  .projects {
    padding: 0 1em;
  }
</style>
