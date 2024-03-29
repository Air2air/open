import { FetchData } from "fetch/fetch";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  OuterPositionerImage,
  OuterPositionerText,
  TextWrapper,
  VariantTitle,
  VariantText,
  InnerPositioner,
  CarouselWrapper,
} from "./carouselComponents";
import "./overrides.scss";

const transitionInterval = 3000;
const transparentPng = "/images/site/transparent.png";

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
      <CarouselWrapper>
        <OuterPositionerImage>
          <Carousel
            showStatus={false}
            swipeable={false}
            autoPlay
            infiniteLoop={false}
            axis="horizontal"
            interval={transitionInterval}
            stopOnHover={false}
            showThumbs={false}
            thumbWidth={120}
            transitionTime={1000}
          >
            {data.map((props, index) => (
              <InnerPositioner key={index}>
                <img alt={props.title} src={props.image} />
                <TextWrapper>
                  <VariantTitle>{props.title}</VariantTitle>
                </TextWrapper>
              </InnerPositioner>
            ))}
          </Carousel>
        </OuterPositionerImage>
        <OuterPositionerText>
          <Carousel
            showStatus={false}
            swipeable={false}
            autoPlay
            infiniteLoop={false}
            axis="vertical"
            interval={transitionInterval}
            stopOnHover={false}
            showThumbs={false}
            thumbWidth={120}
            transitionTime={1000}
            showIndicators={false}
          >
            {data.map((props, index) => (
              <InnerPositioner key={index}>
                <img height={700} alt={props.title} src={transparentPng} />
                <TextWrapper>
                  <VariantText>{props.text}</VariantText>
                </TextWrapper>
              </InnerPositioner>
            ))}
          </Carousel>
        </OuterPositionerText>
      </CarouselWrapper>
    </>
  );
};

export default CarouselComponent;
