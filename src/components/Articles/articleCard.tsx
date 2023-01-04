
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
import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface Props {
  tabs: Tab[];
}

export const ArticleCard = (props: IArticleDataProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // in react typescript create a tabs function that will show a lower content panel when a tab is clicked

  return (
    <>
      <CardHolder>
        <Container>
          <CardRow>
            {props.data.map((item, index) => {
              return (
                <CardContentWrapper
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                >
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
              );
            })}
          </CardRow>
        </Container>
      </CardHolder>

      {props.data.map((props: IArticleDataProps, index) => {
        return (
          <ArticleBody
            key={index}
            {...props}
            style={{ display: selectedIndex === index ? "block" : "none" }}
          />
        );
      })}
    </>
  );
};

export default ArticleCard;
