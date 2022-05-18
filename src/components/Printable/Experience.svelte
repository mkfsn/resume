<script lang="ts">
    import { faBriefcase, faBuilding } from '@fortawesome/free-solid-svg-icons'
    import Fa from 'svelte-fa';

    import {dateFormatter} from "../../utils/formatter";

    export let experiences;
</script>
<section class="experiences" id="experiences">
    <h1>
        <Fa icon={faBriefcase} />
        Experience
    </h1>
    {#each experiences as experience}
        <div class="experience">
            <div class="icon">
                {#if experience.icon}
                    <img src={experience.icon} alt="" />
                {:else}
                    <Fa icon={faBuilding} />
                {/if}
            </div>
            <h3 class="title">
                <a href={experience.organization.link} target="_blank">{experience.organization.name}</a>, {experience.title}
            </h3>
            <p class="date">
                <i>{dateFormatter(experience.date.from)} - {dateFormatter(experience.date.to)}</i>
            </p>
            <ul class="details">
                {#each experience.details as item}
                    <li>{item}</li>
                {/each}
            </ul>
        </div>
    {/each}
</section>

<style lang="scss">
  .experiences {
    margin: 0;
    padding-bottom: 1em;
  }

  .experience {
    $width-breakpoint: 500px;

    display: grid;
    grid-template-columns: calc(25px + 2em) auto auto;
    grid-template-areas: "icon title   date"
                         "icon details details";
    grid-row-gap: .5em;
    margin-top: 1.5em;

    @media (max-width: $width-breakpoint) {
      grid-row-gap: .25em;
      grid-template-areas: "title"
                             "date"
                             "details";
    }

    & > .date {
      grid-area: date;
      justify-self: right;
      margin: 0;
      font-size: .9em;
      line-height: 1.6em;

      @media (max-width: $width-breakpoint) {
        justify-self: left;
        color: var(--dark-gray);
      }
    }

    & > .icon {
      grid-area: icon;
      justify-self: center;

      & > img {
        height: 25px;
        vertical-align: bottom;
      }
    }

    & > .title {
      grid-area: title;
      font-weight: var(--font-bold);
      align-self: center;
      margin: 0;

      @media (max-width: $width-breakpoint) {
        margin-bottom: 0;
      }



      & > a {
        color: var(--black) !important;
        &:visited,
        &:hover,
        &:active {
          color: var(--black) !important;
        }
      }
    }

    & > .details {
      grid-area: details;
      margin: 0;
      padding-left: calc(var(--gap) * 1.5);
    }
  }
</style>
