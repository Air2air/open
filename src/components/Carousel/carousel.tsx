import { FetchData } from "fetch/fetch";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      <Carousel autoPlay infiniteLoop interval={2000}>
        {data.map((props, index) => (
          <div key={index}>
            <img alt={props.title} src={props.image} />
            <p className="legend">{props.text}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselHome;

