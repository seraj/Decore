import * as React from "react";
import StyledInput from "./styled/StyledInput";
import InputProps from "./Input.props";

const Input: React.FC<InputProps> = ({
    className,
    type = "text",
    disabled = false,
    radius = 0,
    defaultValue = "",
    value = "",
    onChange
}) => (
    <StyledInput
        type={type}
        defaultValue={defaultValue}
        value={value}
        className={className}
        disabled={disabled}
        radius={radius}
        onChange={onChange}
    />
);

export default Input;
