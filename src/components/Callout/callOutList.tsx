import Heading from "components/Heading/heading";
import { FetchData } from "fetch/fetch";
import { Parallax } from "react-parallax";
import { Circle, FillerDiv, LogoBug } from "./callOutComponents";

const CalloutList = ({ jsonFile }) => {
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
      {data.map((props, index) => (
        <Parallax
          key={index}
          bgImage={props.imageBackground}
          strength={props.direction === "up" ? `-${props.height}` : props.height }
          bgImageStyle={{ backgroundSize: "cover" }}
          renderLayer={(percentage) => (
            <>
              <Circle percentage={percentage} />
              <LogoBug percentage={percentage} />
            </>
          )}
        >
          <FillerDiv style={{ height: props.height }}>
            <Heading {...props} />
          </FillerDiv>
        </Parallax>
      ))}
    </>
  );
};

export default CalloutList;
