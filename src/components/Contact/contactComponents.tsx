import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_LINK,
  COLOR_TEXT,
  FONT_DEFAULT_DESKTOP,
  FONT_DEFAULT_MOBILE,
  FONT_SUBHEAD_DESKTOP,
  FONT_SUBHEAD_MOBILE,
} from "styles/Constants";

export const CONTACT_ITEM_HEIGHT = 250;

export const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: ${CONTACT_ITEM_HEIGHT}px;
  transition: all 500ms;
  &:hover {
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
    padding: 20px 0;
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 0;
  }
  /* background: gold; */
`;

export const ContactContent = styled.div`
  height: ${CONTACT_ITEM_HEIGHT}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`;

const CONTACT_IMAGE_HEIGHT = CONTACT_ITEM_HEIGHT * 0.8;

export const ContactImageWrapper = styled.div`
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

export const ContactTitle = styled.h2`
  color: ${(props) =>
    props.color === "" || !props.color ? COLOR_LINK : props.color};
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_MOBILE}
  }
`;

export const ContactItemDesc = styled.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${COLOR_TEXT};
`;

export const ContactItemLink = styled.a`
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
