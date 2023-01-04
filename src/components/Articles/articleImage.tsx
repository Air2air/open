import {
  ARTICLE_IMAGE_SIZE_DESKTOP,
  ARTICLE_IMAGE_SIZE_MOBILE,
  BREAKPOINT,
  COLOR_BASE,
  COLOR_WHITE,
} from "constants/index";
import styled from "styled-components";
import { IArticleProps } from "./articleInterfaces";

export const ArticleImage = (props: IArticleProps) => {
  return (
    <ArticleImageWrapper>
      <ArticleImageBackground
        style={{
          backgroundImage: `url(/images/content/${props.image})`,
        }}
      />

      <ArticleCodeBlock>
        <div className="code-wrapper">
          <div className="bracket">&#91;</div>
          <div className="indent">
            <span className="brace">&#123;</span>
            <span className="key">"prompt"</span>:
            <span className="value">
              "{props.code}"
            </span>
            <span className="brace">&#125;,</span>
          </div>
          <div className="indent">
            <span className="brace">&#123;</span>
            <span className="key">"model"</span>:
            <span className="value">"text-davinci-003"</span>
            <span className="brace">&#125;,</span>
          </div>
          <div className="indent">
            <span className="brace">&#123;</span>
            <span className="key">"top_p"</span>:
            <span className="value">1.2</span>
            <span className="brace">&#125;,</span>
          </div>
          <div className="bracket">&#93;</div>
        </div>
      </ArticleCodeBlock>
    </ArticleImageWrapper>
  );
};

const articleImageCodeBlockHeightDesktop = 240;
const articleImageCodeBlockHeightMobile = 240;

export const ArticleImageWrapper = styled.div`
  float: right;
  @media (min-width: ${BREAKPOINT}px) {
    margin: 0 0 40px 40px;
    height: ${ARTICLE_IMAGE_SIZE_DESKTOP +
    articleImageCodeBlockHeightDesktop}px;
    width: ${ARTICLE_IMAGE_SIZE_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${ARTICLE_IMAGE_SIZE_MOBILE + articleImageCodeBlockHeightMobile}px;
    width: ${ARTICLE_IMAGE_SIZE_MOBILE}px;
  }

  /* background-color: blue; */
`;

export const ArticleImageBackground = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${ARTICLE_IMAGE_SIZE_DESKTOP}px;
    width: ${ARTICLE_IMAGE_SIZE_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${ARTICLE_IMAGE_SIZE_MOBILE}px;
    width: ${ARTICLE_IMAGE_SIZE_MOBILE}px;
  }
  /* background-color: blue; */
`;

export const ArticleCodeBlock = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  box-sizing: border-box;
  padding: 30px;
  font-family: "Fira Code", sans-serif;
  font-size: 0.85rem;
  line-height: 1.4rem;

  @media (min-width: ${BREAKPOINT}px) {
    height: ${articleImageCodeBlockHeightDesktop}px;
    width: ${ARTICLE_IMAGE_SIZE_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${articleImageCodeBlockHeightMobile}px;
    width: ${ARTICLE_IMAGE_SIZE_MOBILE}px;
  }
  color: ${COLOR_WHITE};
  background-color: hsl(211, 40%, 12%);  //${COLOR_BASE};
  .code-wrapper {
    height: auto;
  }
  .bracket {
    font-weight: bold;
    color: gold;
  }
  .indent {
    margin-left: 20px;
  }
  .brace {
    font-weight: bold;
    color: lightskyblue;
  }
  .key {
    color: lightgreen;
  }
  .value {
    color: lightcoral;
  }
`;

export default ArticleImage;
