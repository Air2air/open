import { BUTTON_COLOR, BUTTON_HEIGHT_PX } from "../../styles/Constants";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = (props: { to: string; text: string }) => {
  return (
    <>
      <ButtonPositioner>
        <Link to={props.to}>
          <ButtonWrapper> {props.text}</ButtonWrapper>
        </Link>
      </ButtonPositioner>
    </>
  );
};

const ButtonPositioner = styled.div`
  height: ${BUTTON_HEIGHT_PX};
  text-align: right;
  margin-left: auto;
  margin-top:10px;
`;

const ButtonWrapper = styled.div`
  font-size: 1.2em;
  font-family: 'Roboto Condensed', sans-serif;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  height: ${BUTTON_HEIGHT_PX};
  transition: all 300ms;
  text-transform: uppercase;
  background: ${BUTTON_COLOR}; 
`;

export default Button;
