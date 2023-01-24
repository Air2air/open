import { FetchData } from "fetch/fetch";
import { Parallax } from "react-parallax";
// import { CalloutCircle } from "./calloutCircle";
import { FillerDiv} from "./calloutComponents";
// import { Debugger } from "./calloutDebugger";
import { CalloutSubhead } from "./calloutSubHead";
import { CalloutTitle } from "./calloutTitle";

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
                    <CalloutTitle
                      key={index}
                      {...props}
                      percentage={percentage}
                    />
                  ))}

                {props.subhead &&
                  props.subhead.map((props, index) => (
                    <CalloutSubhead
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

export default CalloutList;
