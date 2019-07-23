import * as React from "react";
import StyledDropdown from "./styled/StyledDropdown";
import DropdownProps from "./Dropdown.props";
import Button from "../Button";

const Dropdown: React.FC<DropdownProps> = ({ children, title, ...props }) => (
  <StyledDropdown {...props} className={props.isOpen ? "open" : ""}>
    <Button>
      {title} <span className="caret" />
    </Button>
    <ul className="dropdown-menu">{children}</ul>
  </StyledDropdown>
);

export default Dropdown;
