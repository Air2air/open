import {
  ARTICLE_IMAGE_SIZE_DESKTOP,
  ARTICLE_IMAGE_SIZE_MOBILE,
  BREAKPOINT,
  CALLOUT_HEIGHT,
  CARD_HEIGHT_DESKTOP,
  CARD_HEIGHT_MOBILE,
  CARD_WIDTH_DESKTOP,
  CARD_WIDTH_MOBILE,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "constants/index";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";
import { TitleCallout } from "components/Title/titleCallout";
import { IArticleProps } from "./articleInterfaces";
import { ArticleImage } from "./articleImage";

export const ArticleBody = (props: IArticleProps) => {
  const textParsed = parse(props.text);

  return (
    <>
      <ArticleBodyContainer style={{ background: props.backgroundColor }}>
        <ArticleInner>
          <TitleCallout title={props.title} />
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            delay={10}
            offset={100}
          >
            <ArticleBodyParagraph>
              <ArticleImage {...props} />
              {textParsed}
            </ArticleBodyParagraph>
          </AnimationOnScroll>
        </ArticleInner>
      </ArticleBodyContainer>
    </>
  );
};

const ArticleBodyContainer = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  min-height: ${CALLOUT_HEIGHT}px;
`;

const ArticleInner = styled.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT}px) {
    padding: 50px 0;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 20px 0;
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: red;; */
`;

const ArticleBodyParagraph = styled.div`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT}px) {
    font-size: 1.3em;
    line-height: 1.7em;
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: 1.1em;
    line-height: 1.7em;
  }
`;



export default ArticleBody;
