
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ButtonDesktop, ButtonMobile } from "./buttonComponents";

export const ButtonCentered = (props: {
  buttonTo: string;
  buttonText: string;
  buttonColor?: string;
}) => {
  return (
    <>
      <Link to={props.buttonTo}>
        <ButtonDesktop buttonColor={props.buttonColor}>
          <span>{props.buttonText}</span>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </ButtonDesktop>
        <ButtonMobile buttonColor={props.buttonColor}>
          <span>{props.buttonText}</span>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </ButtonMobile>
      </Link>
    </>
  );
};

export default ButtonCentered;
