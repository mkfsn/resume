<script type="ts">
    import Timeline from "./Timeline/index.svelte";
    
    export let educations;
</script>

<section class="education" id="education">
    <h1>Education</h1>
    <Timeline periods={educations} color="yellow"/>
</section>

<style lang="scss">
  .education {
    $gap: 1em;
    padding-left: $gap;
    padding-right: $gap;
  }
</style>
