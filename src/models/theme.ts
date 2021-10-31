enum ThemeType {
    Prettier = "PRETTIER",
    Printable = "PRINTABLE",
}

function getThemeFromURL(): ThemeType {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');

    switch (theme) {
        case ThemeType.Prettier:
        case ThemeType.Printable:
            return theme;
    }

    return ThemeType.Prettier;
}

export { ThemeType, getThemeFromURL }
