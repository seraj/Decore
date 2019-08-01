var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import Input from "../../Input";
import Icon from "../../Icon";
export var CheckboxContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  vertical-align: middle;\n"], ["\n  display: inline-block;\n  vertical-align: middle;\n"])));
export var HiddenCheckbox = styled(Input).attrs({ type: "checkbox" })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px !important;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px !important;\n"], ["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px !important;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px !important;\n"])));
export var StyledCheckbox = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var checked = _a.checked, theme = _a.theme;
    return "\n        display: inline-block;\n        width: 20px;\n        height: 20px;\n        background: " + theme.colors.light + ";\n        border-color: " + (checked ? theme.colors.mono[700] : theme.colors.mono[500]) + ";\n        border-width: 1.5px;\n        border-style: solid;\n\n        &:hover {\n            border-color: " + theme.colors.mono[600] + ";\n        }\n\n        &[disabled] {\n            background: " + theme.colors.mono[300] + ";\n            border-color: " + theme.colors.mono[300] + ";\n            pointer-events: none;\n\n            svg * {\n              fill: " + theme.colors.mono[500] + ";\n            }\n        }\n\n        " + HiddenCheckbox + ":focus + & {\n            box-shadow: 0 0 0 3px pink;\n        }\n\n        " + Icon + " {\n            position: relative;\n            svg {\n                visibility: " + (checked ? "visible" : "hidden") + ";\n                position: absolute;\n                top: 5px;\n                left: 3px;\n            }\n        }\n    ";
});
export default StyledCheckbox;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=StyledCheckbox.js.map