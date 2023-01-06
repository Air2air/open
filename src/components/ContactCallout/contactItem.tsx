import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_4,
  COLOR_BASE_5,
  COLOR_RED,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_DEFAULT_DESKTOP,
  FONT_DEFAULT_MOBILE,
  FONT_SUBHEAD_DESKTOP,
  FONT_SUBHEAD_MOBILE,
} from "styles/Constants";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ButtonLinkedIn from "../Button/buttonLinkedIn";
import { CONTACT_ITEM_HEIGHT } from "./contactCSS";
import { Spacer } from "components/Spacer/spacer";

interface IContactItemProps {
  id: number;
  shortName: string;
  email: string;
  address: string;
  photo: string;
  backgroundColor: number;
}

const assignBackgroundColor = (props: IContactItemProps) => {
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
    return props.backgroundColor;
  }
};

export const ContactItem = (props: IContactItemProps) => {
  const backgroundImage = "url(/images/content/" + props.photo + ")";

  return (
    <ContactWrapper
      key={props.id}
      animateIn="animate__fadeIn"
      delay={0}
      style={{ background: assignBackgroundColor(props) }}
    >
      <ContactItemWrapper>
        <ContactContent>
          <ContactTitle>{props.shortName}</ContactTitle>
          <ContactItemDesc>{props.address}</ContactItemDesc>
          <Spacer height={15} />
          <ButtonLinkedIn
            to="https://www.linkedin.com/company/eleven-health"
            text="Elevens.ai"
          />
          <Spacer height={15} />
          <ContactItemLink href={`mailto:${props.email}`}>
            {props.email}
          </ContactItemLink>
        </ContactContent>
        <ImageWrapper
          className="bgImage"
          style={{ backgroundImage: backgroundImage }}
        />
      </ContactItemWrapper>
    </ContactWrapper>
  );
};

const ContactWrapper = styled(AnimationOnScroll)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContactItemWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${CONTACT_ITEM_HEIGHT}px;
  transition: all 500ms;
  background: none;
  &:hover {
    background: ${COLOR_BASE_2};
    .bgImage {
      opacity: 1;
      filter: none;
    }
  }
  .bgImage {
    opacity: 0.8;
    filter: grayscale(100%);
  }
  @media (min-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_DESKTOP};
    margin: 40px 0;
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
    margin: 10px 0;
  }
`;

const ContactContent = styled.div`
  height: ${CONTACT_ITEM_HEIGHT}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`;

const CONTACT_IMAGE_HEIGHT = CONTACT_ITEM_HEIGHT * 0.8;

const ImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: ${CONTACT_IMAGE_HEIGHT}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${BREAKPOINT}px) {
    display: inline-flex;
  }
  @media (max-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

const ContactTitle = styled.h2`
  color: ${(props) =>
    props.color === "" || !props.color ? COLOR_RED : props.color};
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_MOBILE}
  }
`;

const ContactItemDesc = styled.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${COLOR_TEXT};
`;

const ContactItemLink = styled.a`
  color: ${COLOR_TEXT};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_DEFAULT_DESKTOP}
    font-size: 1.2em;
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_DEFAULT_MOBILE}
    font-size: 1.1em;
  }
`;
