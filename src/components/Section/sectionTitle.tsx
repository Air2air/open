import styled from "styled-components";
import { COLOR_BANNER_HEADING } from "styles/Colors";
import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";
import {
  FONT_BANNER_HEADING_DESKTOP,
  FONT_BANNER_HEADING_MOBILE,
} from "styles/Text";

export const SectionTitle = (props) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          background: "red",
        }}
      >
        <TitleContainer style={{ color: props.color }}>
          {props.text}
        </TitleContainer>
      </div>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: left;

  /* color: ${COLOR_BANNER_HEADING}; */
  @media (min-width: ${BREAKPOINT}px) {
    width: auto; //${CONTENT_WIDTH_DESKTOP};
    ${FONT_BANNER_HEADING_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: auto; //${CONTENT_WIDTH_MOBILE};
    ${FONT_BANNER_HEADING_MOBILE};
  }
  /* background: green; */
`;
