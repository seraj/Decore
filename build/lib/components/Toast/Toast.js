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
import StyledToast, { ToastIconContainer, ToastContainer, ToastContent } from "./styled/StyledToast";
import Icon from "../Icon";
var Toast = function (_a) {
    var closeToast = _a.closeToast, _b = _a.icon, icon = _b === void 0 ? "" : _b, type = _a.type, text = _a.text, props = __rest(_a, ["closeToast", "icon", "type", "text"]);
    return (React.createElement(ToastContainer, __assign({ type: type }, props),
        React.createElement(StyledToast, { type: type },
            React.createElement(ToastIconContainer, null,
                React.createElement(Icon, { src: icon })),
            React.createElement(ToastContent, null,
                React.createElement("h5", null, type),
                React.createElement("p", null, text))),
        React.createElement(Icon, { style: { cursor: "pointer" }, onClick: closeToast, src: "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 1.61714L14.3829 0L8 6.38286L1.61714 0L0 1.61714L6.38286 8L0 14.3829L1.61714 16L8 9.61714L14.3829 16L16 14.3829L9.61714 8L16 1.61714Z' fill='%23999999'/%3E%3C/svg%3E%0A" })));
};
export default Toast;
//# sourceMappingURL=Toast.js.map