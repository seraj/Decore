var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import ReactTable from "react-table";
var StyledTable = styled(ReactTable)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var compact = _a.compact, simple = _a.simple, theme = _a.theme;
    var Padding = compact
        ? theme.padding.table.normal
        : theme.padding.table.compact;
    var backgroundColor = simple ? "" : theme.colors.mono[200];
    return "\n  border: none !important;\n  .rt-thead.-header {\n    box-shadow: none !important;\n    border-bottom: 1px solid " + theme.colors.mono[400] + ";\n  }\n  .rt-td {\n    padding:" + Padding + " !important;\n  }\n  .rt-thead {\n    .rt-th,\n    .rt-td {\n      border-right: none !important;\n      color: " + theme.colors.mono[500] + ";\n    }\n  }\n  .rt-tbody {\n    .rt-tr-group {\n      border-bottom-color: " + theme.colors.mono[400] + " !important;\n      &:nth-child(odd) {\n        background-color:" + backgroundColor + "\n      }\n    }\n    .rt-td {\n      border-right: none !important;\n      text-align: center !important;\n    }\n  }\n  ";
});
export default StyledTable;
var templateObject_1;
//# sourceMappingURL=StyledTable.js.map