import * as React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme";
var Decore = function (_a) {
    var theme = _a.theme, children = _a.children;
    return (React.createElement(ThemeProvider, { theme: theme || defaultTheme }, children));
};
export default Decore;
//# sourceMappingURL=Decore.js.map