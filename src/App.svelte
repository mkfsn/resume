<script lang="ts">
	import Profile from "./components/Profile.svelte";
	// const urlParams = new URLSearchParams(window.location.search);
	// const wantPrintable = urlParams.get('theme') === 'printable'
</script>

<main>
    <Profile/>
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
