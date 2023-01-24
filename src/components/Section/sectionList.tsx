import { FetchData } from "fetch/fetch";
import { Parallax } from "react-parallax";
import { FillerDiv } from "./sectionComponents";
import { SectionSubhead } from "./sectionSubHead";
import { SectionTitle } from "./sectionTitle";

const SectionList = ({ jsonFile }) => {
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
        <div key={index} style={{ position: "relative" }}>
          <Parallax
            key={index}
            bgImage={props.imageBackground}
            strength={props.strength}
            blur={{ min: 25, max: -25 }}
            bgImageStyle={{ backgroundSize: "cover" }}
            renderLayer={(percentage) => (
              <>
                {props.title &&
                  props.title.map((props, index) => (
                    <SectionTitle
                      key={index}
                      {...props}
                      percentage={percentage}
                    />
                  ))}

                {props.subhead &&
                  props.subhead.map((props, index) => (
                    <SectionSubhead
                      key={index}
                      {...props}
                      percentage={percentage}
                    />
                  ))}
              </>
            )}
          >
            <FillerDiv style={{ height: props.height }} />
          </Parallax>
        </div>
      ))}
    </>
  );
};

export default SectionList;
