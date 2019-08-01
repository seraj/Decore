interface Colors {
    disabled: string;
    primary: {
        normal: string;
        hover: string;
        active: string;
        light: string;
    };
    secondary: {
        normal: string;
        hover: string;
        active: string;
        light: string;
    };
    success: string;
    error: string;
    warning: string;
    info: string;
    mono: {
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
    };
    text: {
        dark: string;
        normal: string;
        light: string;
        link: string;
    };
    light: string;
    dark: string;
}
interface Animations {
    duration: number;
    slider: {
        speed: number;
        autoplaySpeed: number;
    };
}
interface Icons {
    size: number;
}
interface Borders {
    radius: number;
    width: number;
}
interface Fonts {
    heading: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
    text: string;
}
interface Paddings {
    table: {
        normal: string;
        compact: string;
    };
    input: string;
    select: string;
}
export interface Theme {
    colors: Colors;
    animations: Animations;
    icons: Icons;
    borders: Borders;
    fonts: Fonts;
    padding: Paddings;
}
declare const theme: Theme;
export default theme;
