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
            interval={3000}
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
            interval={3000}
            stopOnHover={false}
            showThumbs={false}
            thumbWidth={120}
            transitionTime={1000}
          >
            {data.map((props, index) => (
              <InnerPositioner key={index}>
                <TextWrapper>
                  <VariantText>{props.text}Doodle</VariantText>
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
