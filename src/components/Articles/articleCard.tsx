import { Link } from "react-router-dom";
import Container from "components/Container/container";
import {
  CardRow,
  CardContentWrapper,
  CardBackground,
  CardTextSection,
  CardTextBlock,
  CardText,
  CardHolder,
} from "./articleComponents";
import ArticleBody from "./articleBody";
import { IArticleDataProps } from "./articleInterfaces";

export const ArticleCard = (props: IArticleDataProps) => {
  return (
    <>
      <CardHolder>
        <Container>
          <CardRow>
            {props.data.map((item) => {
              return (
                <Link to={item.to} key={item.id}>
                  <CardContentWrapper>
                    <CardBackground
                      style={{
                        backgroundImage: `url(/images/content/${item.image})`,
                      }}
                      className="card-background"
                    />
                    <CardTextSection>
                      <CardTextBlock className="card-block" />
                      <CardText>{item.title}</CardText>
                    </CardTextSection>
                  </CardContentWrapper>
                </Link>
              );
            })}
          </CardRow>
        </Container>
      </CardHolder>
      {props.data.map((props: IArticleDataProps) => {
        return <ArticleBody {...props} />;
      })}
    </>
  );
};

export default ArticleCard;
