
export const defaultTheme = {
    colors: {
        primary: "#3D5467", // Charcoal
        secondary: "#CED0CE", // Timberwolf
        tertiary: "#F5F5F5", // White Smoke
        tertiaryDark: "#dbdbdb", // Platinum
        accent: "#306b34", // Dark Spring Green
        black: "#212529", // Eerie Black
        white: "#FFFFFF", // White
        alt: "#ddd", // Light Gray
    }
};

type Colors = {
    primary: string;
    secondary: string;
    tertiary: string;
    black: string;
    white: string;
    [key: string]: string;
};

export interface Theme {
    colors: Colors;
}
