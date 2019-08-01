var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var StyledImage = styled.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return "\n    &.decore-image-enter {\n      opacity: 0;\n    }\n\n    &.decore-image-enter-active {\n      opacity: 1;\n      transition: opacity " + theme.animations.duration + "ms;\n    }\n\n    &.decore-image-exit {\n      opacity: 1;\n    }\n\n    &.decore-image-exit {\n      opacity: 0;\n      transition: opacity " + theme.animations.duration + "ms;\n    }\n";
});
export default StyledImage;
var templateObject_1;
//# sourceMappingURL=StyledImage.js.map