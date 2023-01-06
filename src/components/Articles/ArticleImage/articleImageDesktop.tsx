import styled from "styled-components";
import { IArticleProps } from "../articleInterfaces";
import { ARTICLE_IMAGE_SIZE_DESKTOP } from "../articleConstants";
import ArticleCodeBlock from "./articleCodeBlock";

export const ArticleImageDesktop = (
  props: JSX.IntrinsicAttributes & { code?: string; image?: string }
) => {
  return (
    <ArticleImageWrapperDesktop>
      <ArticleImageBackground
        style={{
          backgroundImage: `url(/images/content/${props.image})`,
        }}
      />
      <ArticleCodeBlock {...props} />
    </ArticleImageWrapperDesktop>
  );
};

const articleImageCodeBlockHeightDesktop = 240;

export const ArticleImageWrapperDesktop = styled.div`
  float: right;
  margin: 0 0 40px 40px;
  height: ${ARTICLE_IMAGE_SIZE_DESKTOP + articleImageCodeBlockHeightDesktop}px;
  width: ${ARTICLE_IMAGE_SIZE_DESKTOP}px;
  /* background-color: blue; */
`;

export const ArticleImageBackground = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${ARTICLE_IMAGE_SIZE_DESKTOP}px;
  width: ${ARTICLE_IMAGE_SIZE_DESKTOP}px;
  /* background-color: blue; */
`;

export default ArticleImageDesktop;
