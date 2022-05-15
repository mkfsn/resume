<script type="ts">
    import { faExternalLinkAlt  } from '@fortawesome/free-solid-svg-icons'
    import Fa from 'svelte-fa';

    export let certificates;
    let now = new Date();

    const format_date = (d: Date): String => {
        return (new Date(d)).toLocaleDateString();
    }

    const issued_at = (d: Date): String => {
        return `Issued ${format_date(d)}`
    }

    const expired_at = (_d: Date): String => {
        const d = new Date(_d);
        if (d >= now) {
            return `Expires ${format_date(d)}`
        }

        return `Expired ${format_date(d)}`
    }

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
    <h1>Certificates</h1>
    {#each sort_by_issued_at(certificates) as certificate}
        <div class="certificate">
            <div class="icon">
                <a target="_blank" href={certificate.organization.url}>
                    <img width="48" height="48" src={certificate.organization.icon} alt="" />
                </a>
            </div>
            <div class="info">
                <h3 class="name">
                    {certificate.title}
                    {#if certificate.url}
                        <a href={certificate.url} target="_blank">
                            <Fa icon={faExternalLinkAlt} size="xs" />
                        </a>
                    {/if}
                </h3>
                <h4 class="degree">{certificate.organization.name}</h4>
                <p class="date">{issued_at(certificate.issue_date)} · {expired_at(certificate.expiration_date)}</p>
            </div>
        </div>
    {/each}
</section>

<style lang="scss">
  .certificates {
    margin: 0 .5em;
    padding-bottom: 1em;

    .certificate {
      display: flex;
      margin-top: 1em;

      .icon {
        margin-right: .5em;
      }

      .info {
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
  }
</style>
