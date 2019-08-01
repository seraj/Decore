import ThemeProps from "../../theme/Theme.props";
import "react-inlinesvg";
export default interface IconProps extends ThemeProps, InlineSVG.Props {
    onClick?: () => void;
}
