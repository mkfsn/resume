<script type="ts">
    import { faAtom } from '@fortawesome/free-solid-svg-icons'
    import Fa from 'svelte-fa';

    export let skills;

    let skillSets = skills.map(group => {
        const skillSet = {};
        group.skills.forEach((skill) => {
            if (!skillSet[skill.label]) {
                skillSet[skill.label] = [];
            }
            skillSet[skill.label].push(skill.title);
        });
        const skillList = Object.keys(skillSet).map((key) => skillSet[key].join(" / "));
        return {
            title: group.title,
            skillList: skillList,
        }
    })
</script>

<section class="skills">
    <h1>
        <Fa icon={faAtom} />
        Skills
    </h1>
    <div class="set-wrapper">
        {#each skillSets as skillSet}
            <div class="skill-set">
                <h3>{skillSet.title}</h3>
                <ul>
                    {#each skillSet.skillList as skills}
                        <li>{skills}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
  .skills {
    margin: 0;
    padding-bottom: 1em;

    h1 {
      font-size: 1.5em;
      color: rgb(81, 123, 181);
    }

    .set-wrapper {
      margin-top: 1em;
      display: flex;
      flex-wrap: wrap;
    }

    .skill-set {
      $width-breakpoint: 500px;
      flex: 0 0 100%;
      margin-bottom: 0.9rem;

      @media (max-width: $width-breakpoint) {
        flex: 0 0 100%;
      }

      h3 {
        margin: 0;
        text-transform: capitalize;
      }
      ul {
        padding-left: calc(var(--gap) * 1.5);
        margin-top: .5em;
        margin-bottom: 0;
      }

      &:nth-child(odd) {
        ul {
          margin-right: .5em;
        }
      }
    }
  }
</style>
