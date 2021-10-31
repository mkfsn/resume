<script lang="ts">
    import Printable from "./components/Printable/index.svelte";
    import Prettier from "./components/Prettier/index.svelte";
    import {ThemeType} from "./models/theme";

    import me from './me.yaml';

    let themeType: ThemeType = ThemeType.Printable;
</script>

{#if themeType === ThemeType.Printable}
    <Printable {me} />
{:else if themeType === ThemeType.Prettier}
    <Prettier {me} />
{/if}
