<script lang="ts">
    import {dateFormatter} from "../../utils/formatter";

    export let educations;
</script>

<section class="education-container" id="education">
    <h1>Education</h1>
    {#each educations as education}
        <div class="education">
            <h3 class="name">
                <img src={education.icon} alt="" />
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
    margin: 0 .5em;
    padding-bottom: 1em;
  }

  .education {
    $width-breakpoint: 500px;

    display: grid;
    grid-template-areas: "name   date"
                         "degree degree";
    grid-row-gap: .5em;
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

    & > .name {
      grid-area: name;
      font-weight: var(--font-bold);
      margin: 0;

      & > img {
        height: 25px;
        vertical-align: bottom;
        margin-right: 0.2em;
      }
    }

    & > .date {
      grid-area: date;
      justify-self: right;
      margin: 0;
      font-size: .9em;
      line-height: 1.6em;

      @media (max-width: $width-breakpoint) {
        justify-self: flex-start;
        color: var(--dark-gray);
      }
    }
  }
</style>

