import { FetchData } from "fetch/fetch";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { COLOR_BANNER_HEADING, COLOR_BANNER_SUBHEAD } from "styles/Colors";
import { CONTENT_WIDTH_DESKTOP } from "styles/Constants";
import {
  FONT_FAMILY_HEADING,
  FONT_SIZE_HEADING_DESKTOP,
  LINE_HEIGHT_HEADING_DESKTOP,
  FONT_FAMILY_SUBHEAD,
  FONT_SIZE_SUBHEAD_DESKTOP,
  LINE_HEIGHT_SUBHEAD_DESKTOP,
} from "styles/Text";

const CarouselHome = ({ jsonFile }) => {
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
        autoPlay
        infiniteLoop
        interval={3000}
        stopOnHover={false}
        showThumbs={false}
        thumbWidth={120}
        transitionTime={1000}
      >
        {data.map((props, index) => (
          <OuterWrapper key={index}>
            <img alt={props.title} src={props.image} />
            <TitleWrapper>
              <VariantHeading>{props.title}</VariantHeading>
            </TitleWrapper>
          </OuterWrapper>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselHome;

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* button.control-arrow.control-next {
    width:80px;
  } */
`;

const TitleWrapper = styled.div`
  position: absolute;
  /* bottom: 40px; */
  text-align: center;
  /* background: blue; */
`;

const VariantHeading = styled.div`
  font-family: ${FONT_FAMILY_HEADING};
  color: ${COLOR_BANNER_HEADING};
  font-size: ${FONT_SIZE_HEADING_DESKTOP};
  line-height: ${LINE_HEIGHT_HEADING_DESKTOP};
  /* text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.9); */
  /* background: green; */
`;
