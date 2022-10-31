import styled from "styled-components";
import { COLOR_TEXT, CONTACT_ITEM_HEIGHT_PX } from "../../styles/Constants";

import { AnimationOnScroll } from "react-animation-on-scroll";
import ButtonLinkedIn from "../Button/buttonLinkedIn";

export const ContactItem = (props: {
  id: number;
  shortName: string;
  address: string;
  photo: string;
}) => {
  const backgroundImage = "url(/images/content/" + props.photo + ")";

  return (
    <AnimationOnScroll key={props.id} animateIn="animate__fadeIn" delay={0}>
      <ContactItemWrapper>
        <ContactContent>
          <h3>{props.shortName}</h3>
          <ContactItemDesc>{props.address}</ContactItemDesc>
          <br />
          <ButtonLinkedIn
            to="https://www.linkedin.com/company/eleven-health"
            text="Eleven Health"
          />
          <br />

          <ContactItemLink href="mailto:info@elevens.ai">
            info@elevens.ai
          </ContactItemLink>
        </ContactContent>
        <ImageWrapper style={{ backgroundImage: backgroundImage }} />
      </ContactItemWrapper>
    </AnimationOnScroll>
  );
};

const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: ${CONTACT_ITEM_HEIGHT_PX};
  margin: 24px 0;
`;

const ContactContent = styled.div`
  height: ${CONTACT_ITEM_HEIGHT_PX};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  /* padding: 20px; */
`;

const ImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: ${CONTACT_ITEM_HEIGHT_PX};
  background-size: cover;
`;

const ContactItemDesc = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 1.6em;
  color: ${COLOR_TEXT};
`;

const ContactItemLink = styled.a`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.3em;
  line-height: 1.6em;
  color: ${COLOR_TEXT};
  transition: all 300ms;
  transform: scale(1);
  transform-origin:center center;
  &:hover {
    transform: scale(1.04);
  }
`;
