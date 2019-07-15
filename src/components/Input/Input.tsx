import * as React from "react";
import StyledInput from "./styled/StyledInput";

interface Props {
    children: React.ReactNode;
}

class Input extends React.Component<Props, {}> {
    public render() {
        return (
            <StyledInput>
                {this.props.children}
            </StyledInput>
        );
    }
}

export default Input;
