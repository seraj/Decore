/// <reference types="react" />
import ThemeProps from "../../theme/Theme.props";
import { Theme } from "../../theme";
export default interface ImageProps extends ThemeProps, React.ImgHTMLAttributes<HTMLImageElement> {
    lazy?: boolean;
    theme: Theme;
}
