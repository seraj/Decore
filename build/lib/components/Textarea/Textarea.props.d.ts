/// <reference types="react" />
import ThemeProps from "../../theme/Theme.props";
export default interface TextareaProps extends ThemeProps, React.HTMLAttributes<HTMLTextAreaElement> {
    dark?: boolean;
}
