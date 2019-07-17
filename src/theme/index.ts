interface Colors {
  disabled: string;
  primary: string;
  secondary: string;
  success: string;
  text: string;
  white: string;
}
export interface Theme {
  colors: Colors;
}

const theme: Theme = {
  colors: {
    disabled: "#bdc3c7",
    primary: "#3abf7c",
    secondary: "#ff8686",
    success: "#3abf7c",
    white: "#ffffff",
    text: "#ffffff"
  }
};

export default theme;
