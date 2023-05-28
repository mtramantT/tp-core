// Primary | Secondary | Tertiary | Accent | Alt
export type ColorMap = {
    backgroundColor: string,
    color: string,
    [key: string]: string
};

// General Color Scheme or group of ColorMaps
export type ColorScheme = {
    primary: ColorMap,
    secondary: ColorMap,
    tertiary: ColorMap,
    accent: ColorMap,
    alt: ColorMap,
    black: string,
    white: string,
    [key: string]: ColorMap | string
};

export const isColorMap = (color: ColorMap | string): color is ColorMap => {
    return typeof color !== "string";
}

export const DEFAULT_WHITE = "#F5F5F5";
export const DEFAULT_BLACK = "#212529";

const defaultColorScheme: ColorScheme = {
    primary: {
        backgroundColor: "#3D5467", // Charcoal
        color: DEFAULT_WHITE, // White Smoke
    },
    secondary: {
        backgroundColor: "#CED0CE", // Timberwolf
        color: DEFAULT_BLACK, // Eerie Black
    },
    tertiary: {
        backgroundColor: "#dbdbdb", // Platinum
        color: DEFAULT_BLACK,  // Eerie Black
    },
    accent: {
        backgroundColor: "#306b34", // Dark Spring Green
        color: DEFAULT_WHITE, // White Smoke
    },
    alt: {
        backgroundColor: "#ddd", // Light Gray
        color: DEFAULT_BLACK, // Eerie Black
    },
    black: DEFAULT_BLACK, // Eerie Black
    white: DEFAULT_WHITE, // White Smoke
};
export const defaultTheme = {
    colors: defaultColorScheme
}
export default defaultTheme;