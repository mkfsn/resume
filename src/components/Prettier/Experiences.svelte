<script type="ts">
    import Timeline from "./Timeline/index.svelte";

    export let experiences;
</script>

<section class="experiences">
    <h1>Experience</h1>
    <Timeline periods={experiences} color="green"/>
</section>

<style lang="scss">
    .experiences {
        $gap: 1em;
        padding-left: $gap;
        padding-right: $gap;
    }
</style>
