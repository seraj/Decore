import { withInfo } from "@storybook/addon-info";
var wInfoStyle = {};
var wInfo = function (text) {
    return withInfo({
        inline: true,
        source: true,
        styles: wInfoStyle,
        text: text
    });
};
export default wInfo;
//# sourceMappingURL=wInfo.js.map