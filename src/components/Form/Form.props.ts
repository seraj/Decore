import ThemeProps from "../../theme/Theme.props";

export default interface FormProps
  extends ThemeProps,
    React.FormHTMLAttributes<HTMLFormElement> {}
