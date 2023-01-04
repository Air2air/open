import ArticleCard from "./articleCard";
import { IArticleDataProps } from "./articleInterfaces";

export const ArticleSection = (props: IArticleDataProps) => {
  return <ArticleCard {...props} />;
};

export default ArticleSection;
