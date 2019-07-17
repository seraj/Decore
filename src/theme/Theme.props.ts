export enum Size {
  mini = "mini",
  small = "small",
  normal = "normal",
  big = "big",
  huge = "huge"
}

export default interface ThemeProps {
  /** change the background of Button to our secondary Color */
  secondary?: boolean;

  radius?: number;

  dSize?: Size;

  light?: boolean;
}
