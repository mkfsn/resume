<script>
    import Profile from "./Profile.svelte";
    import Projects from "./Projects.svelte";
    import Skills from "./Skills/index.svelte";

    export let me;
</script>

<main>
    <Profile profile={me.profile} />
    <Projects projects={me.projects} />
    <Skills skills={me.skills} />
</main>

<style lang="scss">
  @import '../../../styles/breakpoints';

  main {
    margin: 0;
    @mixin margin-breakpoint($size) {
      $side: calc((100vw - #{$size})/2);
      margin-left: $side;
      margin-right: $side;
    }
    @each $size in $sm, $md, $lg, $xl {
      @media (min-width: $size) {
        @include margin-breakpoint($size);
      }
    }
  }
</style>
