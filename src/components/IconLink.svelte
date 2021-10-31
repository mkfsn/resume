<script>
    export let link;
</script>

<a target="_blank" href={link}>
    <slot></slot>
</a>

<style lang="scss">
  a {
    &:visited,
    &:hover,
    &:active {
      color: var(--black) !important;
    }

    margin: 0 .2em;
  }
</style>
