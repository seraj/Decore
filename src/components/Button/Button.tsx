import * as React from "react";
import StyledButton from "./styled/StyledButton";
import ButtonProps from "./Button.props";
import Icon from "../Icon";

const loadingIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTDciIHg9IjBweCIgeT0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4gICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMxLjYsMy41QzUuOSwxMy42LTYuNiw0Mi43LDMuNSw2OC40YzEwLjEsMjUuNywzOS4yLDM4LjMsNjQuOSwyOC4xbC0zLjEtNy45Yy0yMS4zLDguNC00NS40LTItNTMuOC0yMy4zICBjLTguNC0yMS4zLDItNDUuNCwyMy4zLTUzLjhMMzEuNiwzLjV6IiB0cmFuc2Zvcm09InJvdGF0ZSgyMDQuNDEzIDUwIDUwKSI+ICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGF0dHJpYnV0ZVR5cGU9IlhNTCIgZHVyPSIxcyIgZnJvbT0iMCA1MCA1MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHRvPSIzNjAgNTAgNTAiIHR5cGU9InJvdGF0ZSIvPiAgICA8L3BhdGg+PC9zdmc+";
const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  icon = null,
  disabled = false,
  ...props
}) => (
  <StyledButton {...props} disabled={disabled || loading} loading={loading}>
    {loading && <Icon src={loadingIcon} />}
    {!loading && icon !== null && icon}
    <span>{children}</span>
  </StyledButton>
);

export default Button;
