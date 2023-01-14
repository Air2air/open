import Container from "components/Container/container";
import {
  ArticleBodyContainer,
  ArticleBodyParagraph,
  ArticleInner,
} from "./articleComponents";
import {
  CardRow,
  CardContentWrapper,
  CardBackground,
  CardTextSection,
  CardTextBlock,
  CardText,
  CardPositioner,
} from "./Cards/cardComponents";

import { useState } from "react";
import parse from "html-react-parser";
import { TitleCallout } from "components/Title/titleCallout";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ArticleImage from "./ArticleImage/articleImage";


export const Articles = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function showActiveTab(activeTab: number) {
    const cardContent = document.getElementsByClassName("cardContent");
    for (let i = 0; i < cardContent.length; i++) {
      cardContent[i].classList.remove("active");
    }
    cardContent[activeTab].classList.add("active");
  }

  const textParsed = parse(props.data[selectedIndex].text);

  return (
    <>
      <Container backgroundColor={4}>
        <CardPositioner>
          <CardRow>
            {props.data.map((card, index) => (
              <CardContentWrapper
                key={index}
                className={`card ${index === selectedIndex ? "active" : ""}`}
                onClick={() => {
                  setSelectedIndex(index);
                  showActiveTab(index);
                }}
              >
                <CardBackground
                  style={{
                    backgroundImage: `url(/images/content/${card.image})`,
                  }}
                />
                <CardTextSection>
                  <CardTextBlock>
                    <CardText>{card.title}</CardText>
                  </CardTextBlock>
                </CardTextSection>
              </CardContentWrapper>
            ))}
          </CardRow>
        </CardPositioner>
      </Container>

      <ArticleBodyContainer
        className="cardContent"
        style={{ background: props.backgroundColor }}
      >
        <ArticleInner>
          <TitleCallout title={props.data[selectedIndex].title} />
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            delay={10}
            offset={100}
          >
            <ArticleBodyParagraph>
              <ArticleImage
                image={props.data[selectedIndex].image}
                code={props.data[selectedIndex].code}
              />
              {textParsed}
            </ArticleBodyParagraph>
          </AnimationOnScroll>
        </ArticleInner>
      </ArticleBodyContainer>
    </>
  );
};



export default Articles;
