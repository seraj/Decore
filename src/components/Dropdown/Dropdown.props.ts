import ThemeProps from "../../theme/Theme.props";

export default interface DropdownProps
  extends ThemeProps,
    React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}
