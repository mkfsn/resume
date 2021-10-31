<script type="ts">
    import {IParsedDateRange, IDateRange} from './date.ts';
    import TimelineAxis from "./TimelineAxis.svelte";
    import TimelinePeriodTitle from "./TimelinePeriodTitle.svelte";
    import TimelinePeriodDetails from "./TimelinePeriodDetails.svelte";

    export let color: string;
    export let date: IDateRange;
    export let details: string[];
    export let icon: string;
    export let organization: string;
    export let title: string;
    export let afterChildren: any[];
    export let beforeChildren: any[];
    export let parsedDate: IParsedDateRange;

    let hasAfterBlock = afterChildren && afterChildren[0] !== undefined;
</script>

<div class="timeline-container">
    <TimelineAxis {date} {color} />
    <div class="timeline-content {color}">
        {#if hasAfterBlock}
            <div class="timeline-container overlap">
                <TimelineAxis date={afterChildren[0].date} color={afterChildren[0].color} />
                <div class="timeline-content {afterChildren[0].color}">
                    <TimelinePeriodTitle title={afterChildren[0].title} icon={afterChildren[0].icon}/>
                    <TimelinePeriodDetails details={afterChildren[0].details} />
                </div>
            </div>
        {/if}
        <TimelinePeriodTitle {title} {icon}/>
        <TimelinePeriodDetails {details} />
    </div>
</div>


<style lang="scss">
  @import "./variables";

  .timeline-container {
    display: flex;
    position: relative;
    //padding-left: $outline-width + $outline-gap;
    padding-top: $gap * 5;

    &:first-child {
      padding-top: 0;
    }

    .timeline-content {
      padding: 0 $gap;
      margin-top: $gap*2;
      margin-bottom: $gap*2;
      box-shadow: 0 0 4px rgba($black, 0.12), 0 2px 2px rgba($black, 0.08);
      position: relative;
      border-radius: 6px;
      $offset: $outline-width;
      width: 100%;
      z-index: 999;
      margin-left: calc(-#{$outline-width} - 4px);

      &.green {
        background-color: rgb(240, 249, 238);
      }
      &.blue {
        background-color: rgb(225, 219, 235);
      }
      &.yellow {
        background-color: rgb(251, 242, 234);
      }
    }

    &.overlap {
      margin-top: $gap * 2;
      margin-bottom: $gap * 2;

      .timeline-axis {
        left: -$gap;
        z-index: 999;
      }

      .timeline-content {
        width: 100%;
      }
    }
  }
</style>
