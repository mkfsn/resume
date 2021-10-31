<script>
    import Profile from "./Profile.svelte";
    import Experience from "./Experience.svelte";
    import Education from "./Education.svelte";
    import Projects from "./Projects.svelte";
    import Skills from "./Skills.svelte";

    export let me;
</script>

<main>
    <Profile profile={me.profile}/>
    <Experience experiences={me.experiences} />
    <Education educations={me.educations} />
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
