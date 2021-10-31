<script type="ts">
    export let details: string[] | string;
</script>

{#if Array.isArray(details)}
    <div class="detail">
        <ul>
            {#each details as item}
                <li>{item}</li>
            {/each}
        </ul>
    </div>
{:else}
    <div class="detail">{details.toString()}</div>
{/if}

<style lang="scss">
  @import "./variables";

  .detail {
    margin-bottom: $gap;
    ul {
      padding-left: 2em;
    }
  }
</style>
