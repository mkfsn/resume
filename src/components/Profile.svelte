<script>
    import SocialMediaLinks from "./SocialMediaLinks.svelte";
    import Fa from 'svelte-fa';
    import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

</script>

<header class="profile">
    <div class="container">
        <h1 class="name">
            <span>Peiming Wu</span>
            <span class="aka">(aka mkfsn)</span>
        </h1>
        <h4 class="address">
        </h4>
        <h4 class="sns">
            <SocialMediaLinks />
            <span class="location">
                <Fa icon={faMapMarkerAlt} size="lg" color="rgb(244, 111, 100)" /> Taiwan
            </span>
            &nbsp;
            <span class="email">
                <Fa icon={faEnvelope} size="lg" /> p408865(#)gmail.com
            </span>
        </h4>
        <hr/>
        <p>Quick-learning software engineer with experience in computer science, programming and computer networking for various projects.</p>
    </div>
</header>

<style lang="scss">
  @import '../../styles/breakpoints';

  .profile {
    background-color: white;
    align-content: center;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    border-width: 0;
    padding: 0;
    height: auto;
    margin: 0 .5em;

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
        font-size: .8em;
        color: #595959;
      }
    }

    .sns {
      display: flex;
      align-items: center;
      margin-bottom: 9px;
    }

    .location {
      margin-left: .2em;
    }
  }
</style>
