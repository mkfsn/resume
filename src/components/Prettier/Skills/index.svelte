<script type="ts">
    import SkillGroup from "./SkillGroup.svelte";

    export let skills;
</script>

<section class="skills">
    <h1>Skills</h1>
    <div class="group-wrapper">
        {#each skills as skillGroup}
            <SkillGroup skillGroup={skillGroup}/>
        {/each}
    </div>
</section>

<style lang="scss">
  @import '../../../../styles/breakpoints';

  .skills {
    padding: 0 1em 2em;

    .group-wrapper {
      $gap: 1em;

      display: grid;
      grid-auto-flow: row;
      grid-template-columns: repeat(auto-fill, calc(50% - #{$gap * .75}));
      column-gap: $gap * 1.5;
      row-gap: $gap * 1.5;
      margin-top: $gap * 1.5;

      @media screen and (max-width: $sm) {
        grid-template-columns: repeat(auto-fill, 100%);
      }
    }
  }
</style>
