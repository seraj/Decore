var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { Size } from "../../../theme/Theme.props";
import Icon from "../../Icon/styled/StyledIcon";
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var disabled = _a.disabled, secondary = _a.secondary, outline = _a.outline, dSize = _a.dSize, theme = _a.theme;
    var color = secondary ? theme.colors.secondary : theme.colors.primary;
    var textColor = outline ? color.normal : theme.colors.text.light;
    var borderColor = outline ? color.normal : "transparent";
    var backgroundColor = outline ? color.light : color.normal;
    return "\n  display: flex;\n  flex-direction: row;\n  padding: 0.4rem 1.2rem;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: " + (dSize == Size.big ? "20px" : "14px") + ";\n  text-align: center;\n  cursor: pointer;\n  transition: 0.3s;\n  border-radius: " + theme.borders.radius + "px;\n  border: 1.5px solid " + borderColor + ";\n\n  background: " + backgroundColor + ";\n  color: " + textColor + ";\n\n  " + Icon + " {\n    margin-right: 0.5em;\n\n    svg {\n      width: 0.8em;\n      fill: " + textColor + ";\n    }\n  }\n\n  &:disabled {\n    background: " + theme.colors.mono[300] + "\n    color: theme.colors.mono[500];\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  &.light {\n    background: #f5f5f5;\n    border-radius: 1px;\n    color: #333;\n    border: none;\n  }\n\n  &:hover {\n    text-decoration: none;\n    color: " + textColor + ";\n    background-color: " + color.hover + ";\n    " + Icon + " svg {\n      fill: " + textColor + ";\n    }\n  }\n\n  &:active {\n    background-color: " + color.active + ";\n    box-shadow: none !important;\n    " + Icon + " svg {\n      fill: " + textColor + ";\n    }\n  }\n";
});
export default StyledButton;
var templateObject_1;
//# sourceMappingURL=StyledButton.js.map