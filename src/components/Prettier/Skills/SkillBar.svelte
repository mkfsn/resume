<script type="ts">
    export let title: string;
    export let color: string;
    export let percentage: string;
</script>

<div class="skill-bar">
    <div class="wrapper">
        <span class="filled" style="background-color: {color}; width: {percentage}" ></span>
    </div>
    <span class="percentage">{percentage}</span>
    <span class="title">{title}</span>
</div>

<style lang="scss">
  @import '../../../../styles/breakpoints';

  .skill-bar {
    $radius: 3px;
    $padding: .5em;
    $height: 1.5em;
    width: 100%;
    margin-bottom: $padding;
    font-size: 0.9em;

    .filled {
      display: block;
      height: $height;
      border-radius: $radius;
      transition: width 500ms ease-in-out;
    }

    @mixin adjust-y-position {
      position: relative;
      margin-top: -$height;
      line-height: $height;
      padding-left: $padding;
      padding-right: $padding;
    }

    .percentage {
      @include adjust-y-position;
      float: right;
    }

    .title {
      @include adjust-y-position;
      float: left;
      color: #fefefe;
      border-top-left-radius: $radius;
      border-bottom-left-radius: $radius;
      background-color: rgba(0, 0, 0, .2);
    }

    .wrapper {
      width: 100%;
      background-color: #e0e0e0;
      border-radius: $radius;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
    }
  }
</style>
