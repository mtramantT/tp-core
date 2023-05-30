import defaultColors from "./defaultColors.json";

// Types
export type Color = `#${string}` | `rgb(${string})` | `rgba(${string})` | `hsl(${string})` | `hsla(${string})`;
export type ColorPallette = {
    default: Color,
    [key: string]: Color
}

export interface ColorSchema {
    primary: ColorPallette,
    secondary: ColorPallette,
    tertiary: ColorPallette,
    accent: ColorPallette,
    [key: string]: ColorPallette,
}

// Type Guards
export const isColor = (color: string): color is Color => {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color) ||
    /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/.test(color) ||
    /^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d{1,3})\)$/.test(color) ||
    /^hsl\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/.test(color) ||
    /^hsla\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d{1,3})\)$/.test(color);
}

export const isColorPallette = (colorPallette: any): colorPallette is ColorPallette => {
    if (typeof colorPallette !== "object" || colorPallette === null || colorPallette === undefined) {
        return false;
    }
    const keys = Object.keys(colorPallette);
    return (
        keys.includes("default") &&
        keys.every((key) => isColor(colorPallette[key]))
    );
};


const DEFAULT_COLORS: {[key: string]: Color} = defaultColors as {[key: string]: Color};
const getDefaultColorPallette = (color: Color, text?: Color): ColorPallette => {
    return text ? {
        default: color,
        text: text,
    } : {
        default: color,
    };
};


const DEFAULT_COLOR_SCHEMA: ColorSchema = {
    primary: getDefaultColorPallette(DEFAULT_COLORS.primary, DEFAULT_COLORS.white),
    secondary: getDefaultColorPallette(DEFAULT_COLORS.secondary, DEFAULT_COLORS.white),
    tertiary: getDefaultColorPallette(DEFAULT_COLORS.tertiary, DEFAULT_COLORS.white),
    accent: getDefaultColorPallette(DEFAULT_COLORS.accent, DEFAULT_COLORS.white),
    black: getDefaultColorPallette(DEFAULT_COLORS.black), // Eerie Black
    white: getDefaultColorPallette(DEFAULT_COLORS.white), // White Smoke
};

// Helpers
export const getColor = (key: string, colorPallette: ColorPallette): Color => {
    return colorPallette[key] || colorPallette.default;
};

export default DEFAULT_COLOR_SCHEMA;
