import { Theme } from "../../theme";

export default interface DecoreProps {
  /** the theme object */
  theme?: Theme;

  children?: React.ReactChild;
}
