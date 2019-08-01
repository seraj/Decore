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
import LazyLoad from "react-lazyload";
import { CSSTransition } from "react-transition-group";
import { withTheme } from "styled-components";
import StyledImage from "./styled/StyledImage";
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loaded: false
        };
        _this.onLoad = function () {
            _this.setState({
                loaded: true
            });
        };
        return _this;
    }
    Image.prototype.render = function () {
        var _a = this, _b = _a.props, lazy = _b.lazy, theme = _b.theme, props = __rest(_b, ["lazy", "theme"]), loaded = _a.state.loaded;
        var image = React.createElement(StyledImage, __assign({}, props, { onLoad: this.onLoad }));
        if (lazy) {
            return (React.createElement(LazyLoad, { height: props.height },
                React.createElement(CSSTransition, { timeout: theme.animations.duration, in: loaded, classNames: "decore-image" }, image)));
        }
        else {
            return image;
        }
    };
    return Image;
}(React.Component));
export default withTheme(Image);
//# sourceMappingURL=Image.js.map