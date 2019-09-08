import * as React from "react";
import StyledAccordion from "./styled/StyledAccordion";
import AccordionProps from "./Accordion.props";

interface AccordionState {
  active: boolean;
}

class Accordion extends React.Component<AccordionProps, AccordionState> {
  public state = {
    active: false
  };
  public toggle = (event: React.MouseEvent) => {
    this.setState({
      active: !this.state.active
    });
  };
  public render() {
    const {
      props: { question, children },
      state: { active },
      toggle
    } = this;
    const classes = active ? "active" : "inactive";
    return (
      <StyledAccordion className={classes}>
        <span className="accordion-label" onClick={toggle}>
          {question}
        </span>
        <span className="accordion-content">{children}</span>
      </StyledAccordion>
    );
  }
}

export default Accordion;
