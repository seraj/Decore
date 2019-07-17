import * as React from "react";
import { ThemeProvider } from "styled-components";
import DecoreProps from "./Decore.props";
import defaultTheme from "../../theme";

const Decore: React.FC<DecoreProps> = ({ theme, children }) => (
  <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
);

export default Decore;
