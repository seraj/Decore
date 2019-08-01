/// <reference types="react" />
import ThemeProps from "../../theme/Theme.props";
export default interface InputProps extends ThemeProps, React.InputHTMLAttributes<HTMLInputElement> {
    fluid?: boolean;
}
