var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import styled from "styled-components";
var ColorBox = styled("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 200px;\n  height: 200px;\n  background: ", ";\n"], ["\n  width: 200px;\n  height: 200px;\n  background: ", ";\n"])), function (_a) {
    var color = _a.color;
    return color;
});
var ColorName = styled("div")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: #fff;\n  height: 50px;\n  color: #999;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Ubuntu\", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #eee;\n  border-top: 0;\n"], ["\n  background: #fff;\n  height: 50px;\n  color: #999;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Ubuntu\", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #eee;\n  border-top: 0;\n"])));
var Wrapper = styled("div")(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 15px;\n  display: inline-block;\n  width: 200px;\n  height: 250px;\n  background: #fff;\n"], ["\n  margin: 15px;\n  display: inline-block;\n  width: 200px;\n  height: 250px;\n  background: #fff;\n"])));
var Color = function (_a) {
    var color = _a.color, name = _a.name;
    return (React.createElement(Wrapper, null,
        React.createElement(ColorBox, { color: color }),
        React.createElement(ColorName, null, name)));
};
export default Color;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=color.js.map