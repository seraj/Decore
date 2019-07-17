interface Colors {
  disabled: string;
  primary: string;
  secondary: string;
  success: string;
  text: string;
  white: string;
}

interface Animations {
  duration: number;
}

export interface Theme {
  colors: Colors;
  animations: Animations;
}

const theme: Theme = {
  colors: {
    disabled: "#bdc3c7",
    primary: "#3abf7c",
    secondary: "#ff8686",
    success: "#3abf7c",
    white: "#ffffff",
    text: "#ffffff"
  },
  animations: {
    duration: 250
  }
};

export default theme;
