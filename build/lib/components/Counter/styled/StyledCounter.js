var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import Input from "../../Input";
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  vertical-align: middle;\n"], ["\n  display: inline-block;\n  vertical-align: middle;\n"])));
export var HiddenInput = styled(Input)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px !important;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px !important;\n"], ["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px !important;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px !important;\n"])));
var StyledCounter = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var disabled = _a.disabled, value = _a.value, min = _a.min, max = _a.max, theme = _a.theme;
    var reachedMax = value !== undefined && max !== undefined && value >= max;
    var reachedMin = value !== undefined && min !== undefined && value <= min;
    return "\n      display: inline-block;\n      width: 78px;\n      height: 29px;\n      background: " + theme.colors.light + ";\n      border-color: " + theme.colors.mono[500] + ";\n      border-width: 1.5px;\n      border-style: solid;\n      position: relative;\n\n      &:hover {\n        border-color: " + theme.colors.mono[700] + ";\n      }\n      \n      " + (disabled
        ? "\n        pointer-events: none;\n        cursor: not-allowed;\n        background: " + theme.colors.mono[300] + ";\n        border-color: transparent;\n      "
        : "") + "\n\n      .decore__value {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        line-height: 29px;\n        color: " + theme.colors.text.normal + ";\n        text-align: center;\n        display: block;\n        font-size: 0.8em;\n      }\n\n      .decore__minus, .decore__plus {\n        position: absolute;\n        width: 25px;\n        text-align: center;\n        top: 0;\n        user-select: none;\n\n        color: " + theme.colors.text.dark + ";\n        cursor: pointer;\n\n        z-index: 1;\n\n        " + (disabled
        ? "\n          color: " + theme.colors.mono[500] + ";\n        "
        : "") + "\n      }\n\n      .decore__minus {\n        left: 0;\n        line-height: 26px;\n\n        " + (reachedMin
        ? "\n          cursor: not-allowed;\n          color: " + theme.colors.mono[500] + " !important;\n        "
        : "\n          &:hover {\n            background: " + theme.colors.mono[300] + ";\n          }\n        ") + "\n      }\n\n      .decore__plus {\n        right: 0;\n        line-height: 26px;\n\n        " + (reachedMax
        ? "\n          cursor: not-allowed;\n          color: " + theme.colors.mono[500] + " !important;\n        "
        : "\n          &:hover {\n            background: " + theme.colors.mono[300] + ";\n          }\n        ") + "\n      }\n  ";
});
export default StyledCounter;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=StyledCounter.js.map