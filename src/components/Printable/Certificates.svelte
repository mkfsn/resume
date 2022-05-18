<script type="ts">
    import { faExternalLinkAlt, faCertificate  } from '@fortawesome/free-solid-svg-icons'
    import Fa from 'svelte-fa';
    import {dateFormatter} from "../../utils/formatter";

    export let certificates;

    const sort_by_issued_at = (list: any[]): any[] => {
        list.sort((a, b) => {
            const x = new Date(a.issue_date),
                  y = new Date(b.issue_date);

            console.log(x, y)

            return (x < y) ? 1 : (x > y) ? -1 : 0;
        })
        return list
    }
</script>

<section class="certificates">
    <h1>
        <Fa icon={faCertificate} />
        Certificates
    </h1>
    {#each sort_by_issued_at(certificates) as certificate}
        <div class="certificate">
            <h3 class="name">
                {#if certificate.url}
                    <a href={certificate.url} target="_blank">
                        {certificate.title}
                        <Fa class="icon" icon={faExternalLinkAlt} size="xs" />
                    </a>
                {:else}
                    {certificate.title}
                {/if}
            </h3>
            <h4 class="degree">
                <a target="_blank" href={certificate.organization.url}>
                    <i>
                        {certificate.organization.name}
                        <Fa class="icon" icon={faExternalLinkAlt} size="xs" />
                    </i>
                </a>
            </h4>
            <p class="date">
                <i>
                    {dateFormatter(certificate.issue_date, false)} - {dateFormatter(certificate.expiration_date, false)}
                </i>
            </p>
        </div>
    {/each}
</section>

<style lang="scss">
  .certificates {
    margin: 0;
    padding-bottom: 1em;

    h1 {
      font-size: 1.5em;
      color: rgb(81, 123, 181);
    }

    .certificate {
      margin-top: 1em;

      a {
        text-decoration: none !important;

        &:visited, &:active {
          color: black;
        }
      }

      :global(.icon) {
        vertical-align: 0 !important;
      }

      .name {
        margin: 0;
      }

      .degree {
        margin: 0;
      }

      .date {
        margin-top: .5em;
      }
    }
  }
</style>
