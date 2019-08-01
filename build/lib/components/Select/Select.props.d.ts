/// <reference types="react" />
import ThemeProps from "../../theme/Theme.props";
export default interface SelectProps extends ThemeProps, React.SelectHTMLAttributes<HTMLSelectElement> {
    fluid?: boolean;
}
