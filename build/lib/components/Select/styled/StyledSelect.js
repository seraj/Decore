var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var StyledSelect = styled.select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
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
    return "\n    color: " + textColor + ";\n    padding: " + theme.padding.select + ";\n    height: 45px;\n    border: " + theme.borders.width + "px solid " + borderColor + ";\n    border-radius:  " + theme.borders.radius + "px;\n    appearance: none;\n    background-color: " + backgroundColor + ";\n\t  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxOCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAxTDkgOS42MTA5MUwxNyAxIiBzdHJva2U9IiM5OTk5OTkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lam9pbj0iYmV2ZWwiLz48L3N2Zz4=);\n    background-repeat: no-repeat, repeat;\n    background-position: right .7em top 50%, 0 0;\n    background-size: .9em auto, 100%;\n " + (fluid
        ? "\n      display: block;\n      width: 100%;"
        : "") + "\n      &:hover {\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxOCAxMSI+ICAgIDxwYXRoIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEgMUw5IDkuNjEwOTFMMTcgMSIvPjwvc3ZnPg==);\n        border-color: " + borderColorHover + ";\n      }\n\n      &:disabled {\n\t      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxOCAxMSI+ICAgIDxwYXRoIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEgMUw5IDkuNjEwOTFMMTcgMSIvPjwvc3ZnPg==);\n        background: " + theme.colors.mono[300] + ";\n        color: " + theme.colors.mono[500] + ";\n        cursor: not-allowed !important;\n        pointer-events: none;\n      }\n  ";
});
export default StyledSelect;
var templateObject_1;
//# sourceMappingURL=StyledSelect.js.map