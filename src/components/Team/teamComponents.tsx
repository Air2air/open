import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import {
  BREAKPOINT,
  COLOR_BASE,
  COLOR_TEXT,
  FONT_SECONDARY_DESKTOP,
  FONT_SECONDARY_MOBILE,
} from "styles/Constants";

// TEAM
export const TEAM_MEMBER_HEIGHT = 220;
export const TEAM_MEMBER_WIDTH = 100;
export const TEAM_MEMBER_PHOTO = 120;

export const TeamContainer = styled(AnimationOnScroll)`
  display: flex;
  width: 100%;
  height: auto;
`;



export const PaddingSection = styled.div`
  width: "100%";
  height: auto;
  @media (min-width: ${BREAKPOINT}px) {
    padding-top: 10px;
    padding-bottom: 80px;
  }

  @media (max-width: ${BREAKPOINT}px) {
    padding-top: 10px;
    padding-bottom: 20px;
  }
  /* background: gold; */
`;

export const TeamGrid = styled.div`
  display: grid;
  flex: 0 0 100%;
  gap: 2rem;
  /* padding: 10px 0 0 0; */
  width: 100%;
  height: auto;
  @media (min-width: 701px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 301px) and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TeamMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: ${TEAM_MEMBER_HEIGHT}px;
  min-width: ${TEAM_MEMBER_WIDTH}px;
  /* margin-top: 20px; */
  /* background: gold; */
`;

export const ImageWrapper = styled.div`
  width: ${TEAM_MEMBER_PHOTO}px;
  height: ${TEAM_MEMBER_PHOTO}px;
  background-size: cover;
  background-color: ${COLOR_BASE};
  filter: grayscale(100%);
`;

export const TeamMemberName = styled.div`
  padding: 12px 0;
  color: ${COLOR_TEXT};
  display: flex;
  align-items: center;

  /* background: red; */
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_SECONDARY_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_SECONDARY_MOBILE};
  }
  /* background: gold; */
`;
