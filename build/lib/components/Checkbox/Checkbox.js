var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import StyledCheckbox, { HiddenCheckbox, CheckboxContainer } from "./styled/StyledCheckbox";
import Icon from "../Icon";
var Checkbox = function (_a) {
    var checked = _a.checked, disabled = _a.disabled, className = _a.className, children = _a.children, props = __rest(_a, ["checked", "disabled", "className", "children"]);
    return (React.createElement(CheckboxContainer, { className: className },
        React.createElement(HiddenCheckbox, __assign({}, props, { type: "checkbox", checked: checked, disabled: disabled })),
        React.createElement(StyledCheckbox, { checked: checked, disabled: disabled },
            React.createElement(Icon, { src: "data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.87216 0.936324L9.06101 0.058217C9.02874 0.0194056 8.97805 0 8.93196 0C8.88126 0 8.83517 0.0194056 8.80291 0.058217L3.18011 6.02062L1.13378 3.86659C1.09691 3.82777 1.05082 3.80837 1.00473 3.80837C0.958641 3.80837 0.912552 3.82777 0.875682 3.86659L0.0553062 4.73014C-0.0184354 4.80776 -0.0184354 4.92905 0.0553062 5.00667L2.63626 7.72347C2.80218 7.89812 3.00497 8 3.1755 8C3.41977 8 3.63178 7.81079 3.71013 7.73317C3.71013 7.73317 3.71013 7.73317 3.71474 7.73317L9.87677 1.21286C9.9413 1.13038 9.9413 1.0091 9.87216 0.936324Z' fill='%23333333'/%3E%3C/svg%3E" }))));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map