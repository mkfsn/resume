<script type="ts">
    import { faEdit } from '@fortawesome/free-solid-svg-icons'
    import Fa from 'svelte-fa';

    export let projects;
</script>

<section class="projects" id="projects">
    {#if projects.length > 0}
    <h1>
        <Fa icon={faEdit} />
        Projects
    </h1>
    {/if}

    {#each projects as project}
        <div class="project">
            <p class="type"><i>{project.type}</i></p>
            <h3 class="title">{project.title}</h3>
            <div class="details">
                <ul>
                    {#each project.details as item}
                        <li key={item}>{item}</li>
                    {/each}
                </ul>
            </div>
        </div>
    {/each}
</section>

<style lang="scss">
  .projects {
    margin: 0;
    padding-bottom: 1em;
    page-break-inside: avoid;
  }

  .project {
    $width-breakpoint: 500px;
    $gap: var(--gap);
    $pink: #e661a9;
    display: grid;
    column-gap: 1rem;
    grid-template-areas: "title   type"
                         "details details";
    grid-row-gap: .5em;
    margin-top: 1.5em;

    @media (max-width: $width-breakpoint) {
      grid-row-gap: .25em;
      grid-template-areas: "title"
                             "type"
                             "details";
    }

    .type {
      grid-area: type;
      justify-self: right;
      align-self: center;
      margin: 0;
      font-size: .9em;
      line-height: 1.6em;
      @media (max-width: $width-breakpoint) {
        justify-self: flex-start;
        color: var(--dark-gray);
      }
    }

    .title {
      grid-area: title;
      font-weight: var(--font-bold);
      margin: 0;
    }

    .details {
      grid-area: details;
      ul {
        margin: 0;
        padding-left: calc(#{$gap} * 1.5);
        word-break: break-all;
      }
    }
  }
</style>
