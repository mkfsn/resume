<script type="ts">
    export let project;
</script>

<div class="project">
    <div class="header">
        <h4 class="title">
            <p>{project.title}</p>
        </h4>
        <h4 class="type">
            <p>{project.type}</p>
        </h4>
    </div>
    <div class="details">
        <ul>
            {#each project.details as item}
                <li>{item}</li>
            {/each}
        </ul>
    </div>
</div>

<style lang="scss">
  $gap: 1em;
  $pink: #e561a9;
  $light-pink: rgba($pink, 0.15);
  $radius: 5px;

  @mixin label {
    background-color: $pink;
    border-radius: $radius;
    color: white;
    font-size: .9em;
    font-weight: 400;
    padding: .2em;
    text-align: center;
    margin-top: calc(1em/.9);
  }

  .project {
    background-color: $light-pink;
    border-radius: $radius;
    max-width: calc(1200px - #{$gap});
    margin-top: $gap;
    padding: 0 $gap;

    .header {
      display: flex;
      gap: $gap;
      h4 {
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
      }
      .title {
        flex: 7;
      }
      .type {
        flex: 1;
        p {
          @include label;
          line-height: 1.2em;
        }
      }
    }

    .details {
      ul {
        margin-top: 0;
        padding-left: 1.5em;
      }
    }
  }
</style>
