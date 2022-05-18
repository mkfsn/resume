<script>
    import SocialMediaLinks from "../SocialMediaLinks.svelte";
    import Fa from 'svelte-fa';
    import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

    export let profile;
</script>

<div class="profile">
    <div class="container">
        <h1 class="name">
            <span>{profile.name}</span>
            {#if profile.nickname}
                <span class="aka">(aka {profile.nickname})</span>
            {/if}
        </h1>
        <h4 class="sns">
            <SocialMediaLinks sns={profile.sns} />
            <span class="location">
                <Fa icon={faMapMarkerAlt} size="lg" color="rgb(244, 111, 100)" /> {profile.location}
            </span>
            &nbsp;
            <span class="email">
                <Fa icon={faEnvelope} size="lg" /> {profile.email}
            </span>
        </h4>
        <p>{profile.summary}</p>
    </div>
</div>

<style lang="scss">
  @import '../../../styles/breakpoints';

  .profile {
    background-color: rgb(235, 183, 143);
    align-content: center;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    border-width: 0;
    padding: 1.5em .5em 1em;
    height: auto;
    margin: 0 0 .5em;

    @mixin margin-breakpoint($size) {
      $side: calc((100vw - #{$size})/2);
      padding-left: $side;
      padding-right: $side;
    }

    @each $size in $sm, $md, $lg, $xl {
      @media (min-width: $size) {
        @include margin-breakpoint($size);
      }
    }

    @media print {
      padding-left: 1cm;
      padding-right: 1cm;
    }

    & > .container {
      max-width: 1200px;
      @mixin max-width($size) {
        max-width: $size;
      }
      @each $size in $sm, $md, $lg, $xl {
        @media (min-width: $size) {
          @include max-width($size);
        }
      }
    }

    .name {
      & > span {
        display: inline-block;
      }
      .aka {
        font-size: 0.7em;
        color: #595959;
      }
    }

    .sns {
      display: flex;
      align-items: center;
      margin-bottom: 9px;
      flex-wrap: wrap;
      row-gap: .2em;
    }

    .location {
      margin-left: .2em;
    }

    .email {
      margin-left: .2em;
    }
  }
</style>
