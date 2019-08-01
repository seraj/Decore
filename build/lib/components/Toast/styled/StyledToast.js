var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var ToastContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, type = _a.type;
    var toastType = type || "info";
    return "\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 550px;\n    height: 87px;\n    padding: 0 1em;\n    background: " + theme.colors.light + ";\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);\n    border-left: 4px solid " + theme.colors[toastType] + ";\n  ";
});
export var ToastContent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-self: flex-end;\n  justify-self: flex-end;\n  position: relative;\n  margin: 5px 0;\n  top: 5px;\n\n  h5 {\n    font-weight: 600;\n    text-transform: capitalize;\n  }\n  p {\n    font-weight: 400;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-self: flex-end;\n  justify-self: flex-end;\n  position: relative;\n  margin: 5px 0;\n  top: 5px;\n\n  h5 {\n    font-weight: 600;\n    text-transform: capitalize;\n  }\n  p {\n    font-weight: 400;\n  }\n"])));
export var ToastIconContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 20px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 20px;\n"])));
var StyledToast = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, type = _a.type;
    return "\n    display: flex;\n    flex-direction: row;\n    justify-content: right;\n    align-items: center;\n\n    " + ToastContent + " {\n      h5 {\n        font-size: " + theme.fonts.heading.h5 + ";\n      }\n      p {\n        font-size: " + theme.fonts.text + ";\n        color: " + theme.colors.text.normal + ";\n      }\n    }\n\n    " + ToastIconContainer + " {\n      span {\n        width: auto;\n      }\n    }\n  ";
});
export default StyledToast;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=StyledToast.js.map