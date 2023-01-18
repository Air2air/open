import { BREAKPOINT } from "styles/Constants";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Container from "components/Container/container";
import { ButtonDesktop, ButtonMobile, BUTTON_HEIGHT } from "./buttonComponents";

export const RowButton = (props: {
  buttonTo: string;
  buttonText: string;
  buttonColor?: string;
  backgroundColor: number;
}) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <ButtonPositioner>
          <Link to={props.buttonTo}>
            <ButtonDesktop>
              <span>{props.buttonText} </span>
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </ButtonDesktop>
            <ButtonMobile>
              <span>{props.buttonText}</span>
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </ButtonMobile>
          </Link>
        </ButtonPositioner>
      </Container>
    </>
  );
};

const ButtonPositioner = styled.div`
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BUTTON_HEIGHT}px;
    text-align: right;
    justify-content: flex-end;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BUTTON_HEIGHT}px;
  }
  /* background: green; */
`;

export default RowButton;
