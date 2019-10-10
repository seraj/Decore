interface Colors {
  primary: {
    normal: string;
    hover: string;
    active: string;
    outline: {
      background: string;
    };
  };
  secondary: {
    normal: string;
    hover: string;
    active: string;
    outline: {
      background: string;
    };
  };
  tertiary: {
    normal: string;
    hover: string;
    active: string;
    outline: {
      background: string;
    };
  };

  success: string;
  error: string;
  warning: string;
  info: string;
  disabled: string;

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

const theme: Theme = {
  colors: {
    primary: {
      normal: "#3abf7c",
      hover: "rgba(58, 191, 124, 0.6)",
      active: "#1B8B5C",
      outline: {
        background: "rgba(27, 139, 92, 0.04)"
      }
    },
    secondary: {
      normal: "#FF8686",
      hover: "rgba(255, 134, 134, 0.6)",
      active: "#C63F3F",
      outline: {
        background: "rgba(255, 134, 134, 0.04)"
      }
    },
    tertiary: {
      normal: "#171c25",
      hover: "rgba(23, 28, 37, 0.8)",
      active: "#191d23",
      outline: {
        background: "rgba(23, 28, 37, 0.04)"
      }
    },

    success: "#3abf7c",
    error: "#DB504A",
    warning: "#FF8552",
    info: "#4D9DE0",
    disabled: "#E5E5E5",

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
  borders: {
    radius: 3,
    width: 1.5
  },
  padding: {
    table: {
      normal: "7px 5px",
      compact: "20px 5px"
    },
    input: "1rem 0.8rem",
    select: ".6em 2.2em .5em .8em"
  },

  animations: {
    duration: 250,
    slider: {
      speed: 1000,
      autoplaySpeed: 5000
    }
  },

  icons: {
    size: 12
  },

  fonts: {
    heading: {
      h1: "2.5rem",
      h2: "2rem",
      h3: "1.75rem",
      h4: "1.5rem",
      h5: "1.25rem",
      h6: "1rem"
    },
    text: "1rem"
  }
};

export default theme;
