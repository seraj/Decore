import styled from "styled-components";
import AccordionProps from "../Accordion.props";

const StyledAccordion = styled.div<AccordionProps>`
      overflow: hidden;
      border-bottom:1px solid #F5F5F5;
      .accordion-content {
          width: 100%;
          display:none;
          padding: 0 1em;
          flex-direction: column;
          align-items: flex-start;
          animation: fadein 0.25s ease-in;
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
        display:block;  
    }
      .accordion-label {
        &::after  {
              transform: rotate(90deg);
        }
      }
    }

    @keyframes fadein {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
    }
`;

export default StyledAccordion;
