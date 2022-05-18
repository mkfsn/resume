<script lang="ts">
    import { faGraduationCap  } from '@fortawesome/free-solid-svg-icons'
    import Fa from 'svelte-fa';

    import {dateFormatter} from "../../utils/formatter";

    export let educations;
</script>

<section class="education-container" id="education">
    <h1>
        <Fa icon={faGraduationCap} />
        Education
    </h1>
    {#each educations as education}
        <div class="education">
            <div class="icon">
                <img src={education.icon} alt="" />
            </div>
            <h3 class="name">
                {education.title}
            </h3>
            <p class="date">
                <i>{dateFormatter(education.date.from)} - {dateFormatter(education.date.to)}</i>
            </p>
            <p class="degree">{education.details}</p>
        </div>
    {/each}
</section>

<style lang="scss">
  .education-container {
    margin: 0;
    padding-bottom: 1em;
  }

  .education {
    $width-breakpoint: 500px;

    display: grid;
    grid-template-areas: "icon name"
                         "icon date"
                         "icon degree";
    grid-row-gap: .5em;
    grid-column-gap: .2em;
    margin-top: 1.5em;

    @media (max-width: $width-breakpoint) {
      grid-row-gap: .25em;
      grid-template-areas: "name"
                           "date"
                           "degree";
    }

    & > .degree {
      grid-area: degree;
      margin: 0;
    }

    & > .icon {
      grid-area: icon;

      & > img {
        height: 16px;
        vertical-align: bottom;
        margin-right: 0.2em;
      }
    }

    & > .name {
      grid-area: name;
      font-weight: var(--font-bold);
      margin: 0;
    }

    & > .date {
      grid-area: date;
      justify-self: left;
      margin: 0;
      font-size: .9em;
      height: 1.8em;
      line-height: 1.8em;

      @media (max-width: $width-breakpoint) {
        justify-self: flex-start;
        color: var(--dark-gray);
      }
    }
  }
</style>

