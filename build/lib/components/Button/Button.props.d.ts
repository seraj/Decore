/// <reference types="react" />
import ThemeProps from "../../theme/Theme.props";
export default interface ButtonProps extends ThemeProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
}
