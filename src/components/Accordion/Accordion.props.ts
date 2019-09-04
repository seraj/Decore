import ThemeProps from "../../theme/Theme.props";

export default interface AccordionProps
  extends ThemeProps,
    React.ImgHTMLAttributes<HTMLImageElement> {
  question?: string;
}
