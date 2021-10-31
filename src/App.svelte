<script lang="ts">
    import Profile from "./components/Profile.svelte";
    import Education from "./components/Education.svelte";
    import Experience from "./components/Experience.svelte";
    import Projects from "./components/Projects.svelte";
    import me from './me.yaml';
    import Skills from "./components/Skills.svelte";
</script>

<main>
    <Profile profile={me.profile}/>
    <Experience experiences={me.experiences} />
    <Education educations={me.educations} />
    <Projects projects={me.projects} />
    <Skills skills={me.skills} />
</main>

<style lang="scss">
  @import '../styles/breakpoints';

  //@media (max-width: $md) {
  //  font-size: 12px;
  //}

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
