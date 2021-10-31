<script type="ts">
    import SkillBar from "./SkillBar.svelte";

    export let skillGroup;
</script>

<div class="skill-group">
    <h3 class="header">{skillGroup.title}</h3>
    <div class="body">
        {#each skillGroup.skills as skill}
            <SkillBar color={skillGroup.color} title={skill.title} percentage={skill.percentage} />
        {/each}
    </div>
</div>

<style lang="scss">
  @import '../../../../styles/breakpoints';

  .skill-group {
    $gap: .5em;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 11px 0 rgba(0, 0, 0, 0.19);

    h3 {
      margin-bottom: 0;
    }

    .header {
      background-color: #cfcfcf;
      border-bottom: 1px solid #777777;
      margin-bottom: $gap;
      height: $gap * 4;
      line-height: $gap * 4;
      padding-left: $gap;
      margin-top: 0;
    }

    .body {
      margin: $gap;
    }
  }
</style>
