<script type="ts">
    export let color: string;
    export let periods;

    // const periods = Period.parsePeriods(this.props.periods);
</script>

<div class="timeline {color}">
    <!--{periods.map((period: Period) => <TimelinePeriod {...period}/>)}-->
</div>

<style lang="scss">
  @import "./variables";

  .timeline {
    position: relative;
    margin-top: $gap * 3;
    margin-bottom: 19.92px;
    max-width: 1200px;

    &.green::after {
      border-right-color: $green;
    }
    &.blue::after {
      border-right-color: $blue;
    }
    &.yellow::after {
      border-right-color: $yellow;
    }

    // For the dotted line
    &::after {
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      position: absolute;
      padding-left: $outline-width;
      border-right-width: $timeline-width;
      border-right-style: dotted;
    }
  }
</style>
