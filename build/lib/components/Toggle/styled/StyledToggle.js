var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var StyledToggle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked, disabled = _a.disabled;
    return "\n      display: inline-block;\n      width: 57px;\n      height: 29px;\n      background: " + theme.colors.light + ";\n      border-color: " + (checked ? theme.colors.mono[700] : theme.colors.mono[500]) + ";\n      border-width: 1.5px;\n      border-style: solid;\n      position: relative;\n\n      &:hover {\n          border-color: " + theme.colors.mono[600] + ";\n      }\n\n      &::after {\n        content: 'Off';\n        font-size: 0.6em;\n        font-weight: bold;\n        line-height: 22px;\n        color: " + theme.colors.text.light + ";\n        text-align: center;\n        text-transform: uppercase;\n        background: " + theme.colors.mono[500] + ";\n        width: 25px;\n        height: 22px;\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        position: absolute;\n        left: 2px;\n        top: 2px;\n        display: inline-block;\n        transition: " + theme.animations.duration + "ms;\n      }\n\n      " + (checked
        ? "\n        &::after {\n          background: " + theme.colors.mono[700] + ";\n          content: 'On';\n          left: 27px;\n        }\n      "
        : "") + "\n\n      " + (disabled
        ? "\n        background: " + theme.colors.mono[300] + ";\n        pointer-events: none;\n        cursor: not-allowed;\n      "
        : "") + "\n  ";
});
export default StyledToggle;
var templateObject_1;
//# sourceMappingURL=StyledToggle.js.map