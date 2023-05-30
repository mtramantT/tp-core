import DEFAULT_COLOR_SCHEMA from "./colors/Color";

export const defaultTheme = {
    colorSchema: DEFAULT_COLOR_SCHEMA
}

export type Theme = typeof defaultTheme;
export default defaultTheme;