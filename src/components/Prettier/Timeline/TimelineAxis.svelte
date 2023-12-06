<script type="ts">
    import {dateFormatter} from "../../../utils/formatter";

    export let color: string;
    export let date: {to: Date, from: Date};
</script>

<div class="timeline-axis {color}">
    <div class="end">{dateFormatter(date.to)}</div>
    <div class="begin">{dateFormatter(date.from)}</div>
</div>

<style lang="scss">
  @import "./variables";

  .timeline-axis {
    z-index: 98;
    position: relative;
    display: flex;
    flex-direction: column;
    border-right-width: $timeline-width;
    border-right-style: solid;
    //margin-left: -$outline-gap - $outline-width;
    padding-right: $outline-gap;
    text-align: right;
    width: 1em;

    @mixin date-text($top-or-bottom) {
      position: relative;
        #{$top-or-bottom}: 0;
      left: 3.5em;
      text-align: left;
    }

    & > .end {
      @include date-text(top);
      margin-top: -$gap;
      width: 10rem;
    }

    & > .begin {
      @include date-text(bottom);
      margin-top: auto;
      margin-bottom: -$gap;
      width: 10rem;
    }

    @mixin time-point {
      content: '';
      position: absolute;
      width: $gap;
      height: $gap;
      right: -$gap - 1px;
      background-color: $white;
      border-width: 4px;
      border-style: solid;
      border-radius: 50%;
      z-index: 1;
    }

    &.blue::before {
      border-color: $blue;
    }
    &.green::before {
      border-color: $green;
    }
    &.yellow::before {
      border-color: $yellow;
    }

    &::before {
      @include time-point;
      top: -8px;
    }

    &.blue::after {
      border-color: $blue;
    }
    &.green::after {
      border-color: $green;
    }
    &.yellow::after {
      border-color: $yellow;
    }

    &::after {
      @include time-point;
      bottom: -8px;
    }

    &.blue {
      border-right-color: $blue;
    }
    &.green {
      border-right-color: $green;
    }
    &.yellow {
      border-right-color: $yellow;
    }
  }
</style>
