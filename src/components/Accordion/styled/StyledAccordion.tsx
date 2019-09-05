import styled from "styled-components";
import AccordionProps from "../Accordion.props";

const StyledAccordion = styled.div<AccordionProps>`
  ${({ theme }) => `
      overflow: hidden;
      border-bottom:1px solid #F5F5F5;
      .accordion-content {
        display: block;
        transition: all 0.2s ease-in;
        padding: 0 1em;
    }
    .accordion-label {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        cursor: pointer;
        &::after {
            content: "\\276F";
            transition: all .35s;
        }
    }
    }
    &.active {
      .accordion-content {
        transform: perspective(350px);
        transition: all 0.4s ease-in-out;
    }
      .accordion-label {
        &::after  {
              transform: rotate(90deg);
        }
      }
    }

    &.inactive {
      .accordion-content {
        transform-origin: 50% 0%;
        transform: perspective(250px);
        transition: all 0.4s ease-in-out;
        height: 0;
      }
    }
  `}
`;

export default StyledAccordion;
