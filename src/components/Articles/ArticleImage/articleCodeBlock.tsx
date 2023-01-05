import {
  BREAKPOINT,
  COLOR_CODE_BACKGROUND,
  COLOR_WHITE,
  FONT_CODE_DESKTOP,
  FONT_CODE_MOBILE,
  FONT_WEIGHT_BOLD,
} from "styles/Constants";
import styled from "styled-components";
import { IArticleProps } from "../articleInterfaces";
import {
  ARTICLE_IMAGE_SIZE_DESKTOP,
  ARTICLE_IMAGE_SIZE_MOBILE,
} from "../articleCSS";

export const ArticleCodeBlock = (props: IArticleProps) => {
  return (
    <ArticleCode>
      <div className="code-wrapper">
        <div className="bracket">&#91;</div>
        <div className="indent">
          <span className="brace">&#123;</span>
          <span className="key">"prompt"</span>:
          <span className="value">"{props.code}"</span>
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
    </ArticleCode>
  );
};


export const ArticleCode = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_CODE_DESKTOP}
    padding: 30px;
    /* height: 100%; */
    width: ${ARTICLE_IMAGE_SIZE_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_CODE_MOBILE}
    padding: 10px;
    height: 100%;
    width: ${ARTICLE_IMAGE_SIZE_MOBILE}px;
  }

  .code-wrapper {
    height: auto;
  }
  .bracket {
    font-weight: ${FONT_WEIGHT_BOLD};
    color: gold;
  }
  .indent {
    margin-left: 20px;
  }
  .brace {
    font-weight: ${FONT_WEIGHT_BOLD};
    color: #22aaff;
  }
  .key {
    color: #3ae998;
  }
  .value {
    color: #faab4a;
  }
  background-color: ${COLOR_CODE_BACKGROUND};
`;

export default ArticleCodeBlock;
