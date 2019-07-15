interface Colors {
    disabledColor: string;
    primaryColor: string;
    secondaryColor: string;
    successColor: string;
    white: string;
}
export interface ThemeInterface {
    colors: Colors;
}

const theme: ThemeInterface = {
    colors: {
        disabledColor: "#bdc3c7",
        primaryColor: "#3abf7c",
        secondaryColor: "#ff8686",
        successColor: "#3abf7c",
        white: "#ffffff"
    }
};

export default theme;
