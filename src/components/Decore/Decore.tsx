import * as React from "react";
import { ThemeProvider } from "styled-components";
import DecoreProps from "./Decore.props";

const Decore: React.FC<DecoreProps> = ({ theme, children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Decore;
