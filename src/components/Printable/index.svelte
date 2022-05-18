<script>
    import Profile from "./Profile.svelte";
    import Experience from "./Experience.svelte";
    import Education from "./Education.svelte";
    import Projects from "./Projects.svelte";
    import Skills from "./Skills.svelte";
    import Certificates from "./Certificates.svelte";

    export let me;
</script>

<div class="wrapper">
    <header class="header">
        <Profile profile={me.profile}/>
    </header>
    <section class="sidebar">
        <Skills skills={me.skills} />
        <Certificates certificates={me.certificates} />
    </section>
    <main class="main">
        <Experience experiences={me.experiences} />
        <Projects projects={me.projects} />
        <Education educations={me.educations} />
    </main>
</div>


<style lang="scss">
  @import '../../../styles/breakpoints';

  .wrapper {
    margin: 0;
    display: grid;
    grid-template-columns: 0 1fr 2em 3fr 0;
    grid-template-rows:  1fr auto;
    grid-template-areas:
      'header header  header header header'
      '.      sidebar .      main   .';

    @mixin margin-breakpoint($size) {
      $side: calc((100vw - #{$size})/2);
      grid-template-columns: $side 1fr 2em 3fr $side;
    }
    @each $size in $sm, $md, $lg, $xl {
      @media (min-width: $size) {
        @include margin-breakpoint($size);
      }
    }

    @media print {
      margin-top: 0;
      margin-left: 0;
      margin-right: 0;

      grid-template-columns: 1cm 1fr 2em 3fr 1cm;
    }

    .header {
      grid-area: header;
    }

    .sidebar {
      grid-area: sidebar;
    }

    .main {
      grid-area: main;
    }


  }
</style>
