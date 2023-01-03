import Container from "components/Container/container";
import { Key } from "react";
import Card from "./card";

export interface IArticleDataProps {
  data: any;
}

export interface IArticleProps {
  id: number;
  to: string;
  title: string;
  text: string;
  image: string;
  data: any;
}

export const CardArticles = (props: IArticleDataProps, index: number) => {
  return <Card {...props} />;
};

export default Card;
