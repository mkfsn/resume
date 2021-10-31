<script lang="ts">
    import Printable from "./components/Printable/index.svelte";
    import Prettier from "./components/Prettier/index.svelte";
    import ThemeSelector from "./components/ThemeSelector.svelte";
    import {ThemeType, getThemeFromURL} from "./models/theme";

    import me from './me.yaml';

    let themeType = getThemeFromURL();
</script>

<div class="theme-selector">
    <ThemeSelector/>
</div>

{#if themeType === ThemeType.Printable}
    <Printable {me} />
{:else if themeType === ThemeType.Prettier}
    <Prettier {me} />
{/if}

<style lang="scss">
  .theme-selector {
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
