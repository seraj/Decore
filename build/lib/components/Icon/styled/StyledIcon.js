var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import SVG from "react-inlinesvg";
var StyledIcon = styled(SVG)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, light = _a.light;
    return "\n    display: inline-block;\n    fill: " + (light ? theme.colors.text.light : theme.colors.text.dark) + ";\n    width: " + theme.icons.size + "px;\n  ";
});
export default StyledIcon;
var templateObject_1;
//# sourceMappingURL=StyledIcon.js.map