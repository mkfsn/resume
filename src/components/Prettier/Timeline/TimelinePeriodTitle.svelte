<script type="ts">
    export let title: string;
    export let icon: string;
</script>

<div class="title">
    <h3>
        <img class="icon" alt="" src={icon} /> {title}
    </h3>
</div>

<style lang="scss">
  @import "./variables";

  .title > h3 {
    margin-top: $gap;
    margin-bottom: $gap;
    display: flex;
    align-items: center;

    .icon {
      $size: 1.35em;
      margin-right: .5em;
      height: $size;
      width: $size;
      vertical-align: middle;
      border-radius: 50%;
    }
  }
</style>
