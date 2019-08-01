/// <reference types="react" />
import ThemeProps from "../../theme/Theme.props";
import IconProps from "../Icon/Icon.props";
export default interface ToastProps extends ThemeProps, React.HTMLAttributes<HTMLDivElement> {
    /** Toast type ['success', 'error', 'warning', 'info'] */
    type?: string;
    /** Text message to show on toast */
    text?: string;
    icon?: IconProps["src"];
    closeToast?: () => void;
}
