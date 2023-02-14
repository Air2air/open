import { FetchData } from "fetch/fetch";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { OuterPositioner, TextWrapper, VariantTitle, VariantText } from "./carouselComponents";
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

