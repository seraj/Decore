interface Colors {
  disabled: string;
  primary: string;
  secondary: string;
  success: string;
  text: {
    normal: string;
    onBackground: string;
  };
  white: string;
}

interface Animations {
  duration: number;
}

interface Icons {
  size: number;
}

export interface Theme {
  colors: Colors;
  animations: Animations;
  icons: Icons;
}

const theme: Theme = {
  colors: {
    disabled: "#bdc3c7",
    primary: "#3abf7c",
    secondary: "#ff8686",
    success: "#3abf7c",
    white: "#ffffff",
    text: {
      normal: "#1f1f1f",
      onBackground: "#ffffff"
    }
  },
  animations: {
    duration: 250
  },
  icons: {
    size: 12
  }
};

export default theme;
