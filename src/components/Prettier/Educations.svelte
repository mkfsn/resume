<script type="ts">
    import Timeline from "./Timeline/index.svelte";
    
    export let educations;

    const ignoreDisplayWithPrintable = (e): boolean => {
        if (e.display === undefined) {
            return true
        }

        return e.display !== "printable";
    }

</script>

<section class="education" id="education">
    <h1>Education</h1>
    <Timeline periods={educations.filter(e => ignoreDisplayWithPrintable(e) )} color="yellow"/>
</section>

<style lang="scss">
  .education {
    $gap: 1em;
    padding-left: $gap;
    padding-right: $gap;
  }
</style>
