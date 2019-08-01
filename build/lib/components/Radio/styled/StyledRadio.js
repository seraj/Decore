var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import Input from "../../Input";
export var RadioContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  cursor: pointer;\n"], ["\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  cursor: pointer;\n"])));
export var HiddenRadio = styled(Input).attrs({ type: "radio" })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n"])));
var StyledRadio = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked, disabled = _a.disabled;
    return "\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 20px;\n        width: 20px;\n        background-color: " + theme.colors.light + ";\n        border-radius: 0;\n        border-width: 1.5px;\n        border-style: solid;\n        border-color: " + theme.colors.mono[500] + ";\n\n        &:hover {\n            border-color: " + theme.colors.mono[600] + ";\n        }\n\n        " + (!disabled && checked
        ? "\n            border-color: " + theme.colors.mono[700] + ";\n        "
        : "") + "\n\n        " + (checked
        ? "\n            &::after {\n                content: '';\n                position: absolute;\n                display: block;\n                top: 4.5px;\n                left: 4.5px;\n                width: 8px;\n                height: 8px;\n                background-color: " + theme.colors.mono[700] + ";\n            }\n        "
        : "") + "\n\n        " + (disabled
        ? "\n            background: " + theme.colors.mono[300] + ";\n            pointer-events: none;\n            cursor: not-allowed;\n\n            &::after {\n                content: '';\n                position: absolute;\n                display: block;\n                top: 8px;\n                left: 4.5px;\n                width: 8px;\n                height: 2px;\n                background-color: " + theme.colors.mono[500] + ";\n            }\n          "
        : "") + "\n        }\n    ";
});
export default StyledRadio;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=StyledRadio.js.map