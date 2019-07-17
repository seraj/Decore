import { withInfo } from "@storybook/addon-info";

const wInfoStyle = {};

const wInfo = (text?: string) =>
  withInfo({
    inline: true,
    source: true,
    styles: wInfoStyle,
    text
  });

export default wInfo;
