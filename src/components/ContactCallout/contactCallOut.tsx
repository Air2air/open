import {
  CALLOUT_HEIGHT_PX,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_TEXT,
  CONTENT_WIDTH,
} from "../../styles/Constants";
import styled from "styled-components";
import ButtonLinkedIn from "../Button/buttonLinkedIn";

export const ContactCallout = () => {
  return (
    <>
      <ContactCalloutContainer>
        <Container>
          <ContactSide>
            <a className="link" href="mailto:info@elevens.ai">
              info@elevens.ai
            </a>
          </ContactSide>
          <ContactSide>
            <ButtonLinkedIn
              to="https://www.linkedin.com/company/82564221/"
              text="Elevens Health"
            />
          </ContactSide>
        </Container>
      </ContactCalloutContainer>
    </>
  );
};

const ContactCalloutContainer = styled.div`
  top: 0;
  width: 100vw;
  align-items: center;
  height: auto;
  min-height: ${CALLOUT_HEIGHT_PX};
  background: ${COLOR_BASE_2};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  min-height: ${CALLOUT_HEIGHT_PX};
  width: ${CONTENT_WIDTH};
  /* background: gold; */
`;

const ContactSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1.7em;
  flex: 1;
  min-height: ${CALLOUT_HEIGHT_PX};
  text-align: center;
  transition: all 300ms;
  background: none;
  cursor: pointer;
  background: none;
  &:hover {
    background: ${COLOR_BASE_3};
  }
  .link {
    color: ${COLOR_TEXT};
    font-size: 1.5em;
  }
`;

export default ContactCallout;
