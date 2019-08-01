var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var StyledTextarea = styled.textarea(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, dark = _a.dark;
    return "\n    border: 1.5px solid " + theme.colors.mono[500] + ";\n\n    padding: 0.6em 0.8em;\n\n    color: " + theme.colors.text.dark + ";\n\n    " + (dark
        ? "\n      background: " + theme.colors.mono[200] + ";\n    "
        : "") + "\n  ";
});
export default StyledTextarea;
var templateObject_1;
//# sourceMappingURL=StyledTextarea.js.map