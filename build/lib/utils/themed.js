import * as React from "react";
import * as renderer from "react-test-renderer";
import Decore from "../components/Decore";
import theme from "../theme";
var themed = function (component) {
    return renderer.create(React.createElement(Decore, { theme: theme }, component));
};
export default themed;
//# sourceMappingURL=themed.js.map