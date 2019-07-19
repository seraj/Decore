interface Colors {
  disabled: string;
  primary: string;
  secondary: string;
  success: string;
  danger: string;
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

    danger: "#DB504A",
    warning: "#FF8552",
    info: "#4D9DE0",
    success: "#3abf7c",

    light: "#ffffff",
    dark: "#333333",

    mono: {
      700: "#333333",
      600: "#666666",
      500: "#999999",
      400: "#CCCCCC",
      300: "#E5E5E5",
      200: "#F5F5F5",
      100: "#FAFAFA"
    },

    text: {
      dark: "#333333",
      normal: "#999999",
      light: "#ffffff",

      link: "#4D9DE0"
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
