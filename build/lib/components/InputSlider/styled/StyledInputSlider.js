var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var StyledInputSlider = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var backgroundColor = theme.colors.primary.normal;
    return "\n    .input-range__slider,.input-range__track--active {\n      background:" + backgroundColor + ";\n      border-color:" + backgroundColor + ";\n    }\n   ";
});
export default StyledInputSlider;
var templateObject_1;
//# sourceMappingURL=StyledInputSlider.js.map