var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import StyledCounter, { Container, HiddenInput } from "./styled/StyledCounter";
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: 0,
            userSet: false
        };
        _this.boundCheck = function (v) {
            var _a = _this.props, min = _a.min, max = _a.max;
            if (!min) {
                min = -Infinity;
            }
            else if (typeof min == "string") {
                min = parseInt(min, 10);
            }
            if (!max) {
                max = Infinity;
            }
            else if (typeof max == "string") {
                max = parseInt(max, 10);
            }
            return Math.max(Math.min(v, max), min);
        };
        _this.increment = function () {
            _this.setState({
                value: _this.boundCheck(_this.state.value + 1),
                userSet: true
            });
        };
        _this.decrement = function () {
            _this.setState({
                value: _this.boundCheck(_this.state.value - 1),
                userSet: true
            });
        };
        return _this;
    }
    Counter.getDerivedStateFromProps = function (props, state) {
        var propsValue = Counter.parseValue(props.value, Counter.parseValue(props.defaultValue, 0));
        return {
            value: state.userSet ? state.value : propsValue
        };
    };
    Counter.parseValue = function (v, defaultValue) {
        if (v === undefined) {
            return defaultValue;
        }
        else if (typeof v == "string") {
            return parseInt(v, 10);
        }
        else if (Array.isArray(v)) {
            return parseInt(v[0], 10);
        }
        return v;
    };
    Counter.prototype.render = function () {
        var _a = this.props, children = _a.children, min = _a.min, max = _a.max, props = __rest(_a, ["children", "min", "max"]);
        var value = this.state.value;
        if (this.props.value !== undefined) {
            value = Counter.parseValue(this.props.value, undefined);
        }
        return (React.createElement(Container, null,
            React.createElement(HiddenInput, __assign({ value: value }, props, { type: "number" })),
            React.createElement(StyledCounter, __assign({}, props, { value: value, min: min, max: max }),
                React.createElement("span", { className: "decore__minus", onClick: this.decrement }, "-"),
                React.createElement("span", { className: "decore__value" }, value),
                React.createElement("span", { className: "decore__plus", onClick: this.increment }, "+"))));
    };
    return Counter;
}(React.Component));
export default Counter;
//# sourceMappingURL=Counter.js.map