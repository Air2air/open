import {
  BREAKPOINT,
  CARD_HEIGHT_DESKTOP,
  CARD_HEIGHT_MOBILE,
  CARD_WIDTH_DESKTOP,
  CARD_WIDTH_MOBILE,
  COLOR_WHITE,
} from "constants/index";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IArticleDataProps } from "./cardArticles";
import Container from "components/Container/container";

export const Card = (props: IArticleDataProps) => {
  return (
    <>
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
    </>
  );
};

const CardRow = styled.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  flex-wrap: wrap;
  /* background: gold; */
`;

const CardContentWrapper = styled.div`
  margin: 20px 12px;
  position: relative;
  top: 0;
  left: 0;
  transition: all 600ms;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .card-background {
    filter: brightness(0.5);
    transform: scale(1);
  }
  .card-block {
    transition: all 600ms;
    background-color: rgba(0, 0, 0, 0);
  }
  &:hover {
    .card-background {
      filter: brightness(1);
      transform: scale(1.03);
    }
    .card-block {
      /* transition: all 600ms; */
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  overflow: hidden;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CARD_HEIGHT_DESKTOP}px;
    width: ${CARD_WIDTH_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CARD_HEIGHT_MOBILE}px;
    width: ${CARD_WIDTH_MOBILE}px;
  }
  /* background-color: blue; */
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 600ms;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CARD_HEIGHT_DESKTOP}px;
    width: ${CARD_WIDTH_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CARD_HEIGHT_MOBILE}px;
    width: ${CARD_WIDTH_MOBILE}px;
  }
  /* background-color: blue; */
`;

const CardTextSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${CARD_HEIGHT_DESKTOP}px;
    width: ${CARD_WIDTH_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${CARD_HEIGHT_MOBILE}px;
    width: ${CARD_WIDTH_MOBILE}px;
  }
  /* background-color: blue; */
`;

const CardTextBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  @media (min-width: ${BREAKPOINT}px) {
    height: 50%;
    width: ${CARD_WIDTH_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 50%;
    width: ${CARD_WIDTH_MOBILE}px;
  }
`;

const CardText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  color: ${COLOR_WHITE};
  padding: 30px;
  box-sizing: border-box;
  font-weight: 400;
  font-family: "Roboto Condensed", sans-serif;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  @media (min-width: ${BREAKPOINT}px) {
    height: 50%;
    width: ${CARD_WIDTH_DESKTOP}px;
    font-size: 1.3em;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 50%;
    width: ${CARD_WIDTH_MOBILE}px;
    font-size: 1.3em;
  }
  /* background-color: blue; */
`;

export default Card;
