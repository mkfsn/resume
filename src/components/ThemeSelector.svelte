<script type="ts">
    import Fa from 'svelte-fa';
    import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
    import {ThemeType} from "../models/theme";
</script>

<div class="dropdown">
    <button class="dropdown-btn">
        Theme <Fa icon={faCaretDown} />
    </button>
    <div class="dropdown-content">
        <a href={"/?theme=" + ThemeType.Printable }>Printable</a>
        <a href={"/?theme=" + ThemeType.Prettier }>Prettier</a>
    </div>
</div>

<style lang="scss">
  .dropdown {
    $btn-color: #a7a7a7;
    $btn-color-hover: #858585;

    position: relative;
    display: inline-block;
    z-index: 10000;

    @media print {
      display: none;
    }

    .dropdown-btn {
      background-color: $btn-color;
      color: white;
      padding: .5em;
      font-size: 1em;
      border: none;
      cursor: pointer;
    }

    &:hover {
      .dropdown-btn {
        background-color: $btn-color-hover;
      }

      .dropdown-content {
        display: block;
      }
    }

    .dropdown-content {
      display: none;
      position: absolute;
      right: 0;
      background-color: #f9f9f9;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      z-index: 1;

      a {
        color: black;
        padding: .5rem .75rem;
        text-decoration: none;
        display: block;

        &:hover {
          background-color: #f1f1f1;
        }
      }
    }
  }
</style>
