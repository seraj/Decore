var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var dark = _a.dark, success = _a.success, fluid = _a.fluid, error = _a.error, theme = _a.theme;
    var backgroundColor = dark ? theme.colors.mono[200] : theme.colors.white;
    var textColor = theme.colors.text.dark;
    var borderColor = theme.colors.mono[500];
    var borderColorHover = theme.colors.mono[700];
    if (success) {
        borderColor = theme.colors.success;
        borderColorHover = borderColor;
        textColor = borderColor;
    }
    else if (error) {
        borderColor = theme.colors.error;
        borderColorHover = borderColor;
        textColor = borderColor;
    }
    return "\n      border: " + theme.borders.width + "px solid " + borderColor + ";\n      background-color: " + backgroundColor + ";\n      padding: " + theme.padding.input + ";\n      height: 45px;\n      border-radius: " + theme.borders.radius + "px;\n      color: " + textColor + ";\n " + (fluid
        ? "\n      display: block;\n      width: 100%;"
        : "") + "\n      &:hover {\n        border-color: " + borderColorHover + ";\n      }\n\n      &:disabled {\n        background: " + theme.colors.mono[300] + ";\n        color: " + theme.colors.mono[500] + ";\n        cursor: not-allowed !important;\n        pointer-events: none;\n      }\n  ";
});
export default StyledInput;
var templateObject_1;
//# sourceMappingURL=StyledInput.js.map