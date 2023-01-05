import {
  BREAKPOINT,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_DEFAULT_DESKTOP,
  FONT_DEFAULT_MOBILE,
} from "styles/Constants";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";
import { TitleCallout } from "components/Title/titleCallout";
import { IArticleProps } from "./articleInterfaces";
import { ArticleImage } from "./ArticleImage/articleImage";

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
  margin: 20px 0;
  position: relative;
  top: 0;
  height: auto;
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
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT}px) {
    /* ${FONT_DEFAULT_DESKTOP} */
  }
  @media (max-width: ${BREAKPOINT}px) {
    /* ${FONT_DEFAULT_MOBILE} */
  }
`;

export default ArticleBody;
