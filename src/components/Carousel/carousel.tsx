import { FetchData } from "fetch/fetch";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { BREAKPOINT, CONTENT_WIDTH_MOBILE } from "styles/Constants";
import { COLOR_BANNER_HEADING, COLOR_BANNER_SUBHEAD } from "styles/Colors";
import { CONTENT_WIDTH_DESKTOP } from "styles/Constants";
import {
  FONT_FAMILY_HEADING,
  FONT_SIZE_HEADING_DESKTOP,
  LINE_HEIGHT_HEADING_DESKTOP,
  FONT_FAMILY_SUBHEAD,
  FONT_SIZE_SUBHEAD_DESKTOP,
  LINE_HEIGHT_SUBHEAD_DESKTOP,
  FONT_BANNER_HEADING_DESKTOP,
  FONT_BANNER_HEADING_MOBILE,
  FONT_BANNER_SUBHEAD_DESKTOP,
  FONT_BANNER_SUBHEAD_MOBILE,
} from "styles/Text";
import "./overrides.scss";

const CarouselComponent = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return null;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Carousel
        swipeable={false}
        autoPlay
        infiniteLoop={false}
        axis="horizontal"
        interval={3000}
        stopOnHover={false}
        showThumbs={false}
        thumbWidth={120}
        transitionTime={1000}
      >
        {data.map((props, index) => (
          <OuterPositioner key={index}>
            <img alt={props.title} src={props.image} />
            <TextWrapper>
              <VariantTitle>{props.title}</VariantTitle>
              <VariantText>{props.text}</VariantText>
            </TextWrapper>
          </OuterPositioner>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselComponent;

const OuterPositioner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */
`;

const TextWrapper = styled.div`
  position: absolute;
  /* top:0; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  /* text-align: center; */
  @media (min-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: blue; */
`;

const VariantTitle = styled.div`
  text-align: center;
  height: auto;
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_HEADING_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_HEADING_MOBILE}
  }
  /* background: green; */
`;

const VariantText = styled.div`
  height: auto;
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_BANNER_SUBHEAD_MOBILE}
  }
  /* background: red; */
`;
