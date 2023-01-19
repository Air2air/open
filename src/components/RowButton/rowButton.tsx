import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  RowButtonContainer,
  RowButtonInner,
  RowButtonLeft,
  RowButtonRight,
} from "./rowButtonComponents";

export const RowButton = (props: {
  currentPage?: string;
  buttonTo: string;
  buttonText: string;
}) => {
  return (
    <>
      <RowButtonContainer>
        <RowButtonInner>
          <RowButtonLeft>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
            <span>{props.currentPage}</span>
          </RowButtonLeft>
          <RowButtonRight to={props.buttonTo}>
            <span>{props.buttonText} </span>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
          </RowButtonRight>
        </RowButtonInner>
      </RowButtonContainer>
    </>
  );
};

export default RowButton;
