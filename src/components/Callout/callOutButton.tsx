import {
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_4,
  COLOR_BASE_5,
  COLOR_BASE_6,

} from "../../styles/Constants";
import styled from "styled-components";
import Button from "../Button/button";

interface CalloutButtonProps {
  button1Text?: string;
  button1To?: string;
  button2Text?: string;
  button2To?: string;
  backgroundColor?: number;
  buttonText?: string;
  buttonTo?: string;
}

const CalloutButton = (props: CalloutButtonProps) => {
  const assignBackgroundColor = (props: CalloutButtonProps) => {
    if (props.backgroundColor === 1) {
      return COLOR_BASE_1;
    } else if (props.backgroundColor === 2) {
      return COLOR_BASE_2;
    } else if (props.backgroundColor === 3) {
      return COLOR_BASE_3;
    } else if (props.backgroundColor === 4) {
      return COLOR_BASE_4;
    } else if (props.backgroundColor === 5) {
      return COLOR_BASE_5;
    } else {
      return COLOR_BASE_6;
    }
  };

  return (
    <>
      <ButtonContainer style={{ background: assignBackgroundColor(props) }}>
        {props.button1Text ? (
          <Button to={props.button1To} text={props.button1Text} />
        ) : (
          ""
        )}
        {props.button2Text ? (
          <Button to={props.button2To} text={props.button2Text} />
        ) : (
          ""
        )}
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  align-items: center;
  height: auto;
`;

export default CalloutButton;
