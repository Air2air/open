
import {
  SubheadContainer,
  SubheadText,
  TitleContainer,
  TitleText,
} from "components/Heading/headingComponents";
import { FetchData } from "fetch/fetch";
import { Parallax } from "react-parallax";
import { Circle } from "./callOutCircle";
import { FillerDiv, LogoBug } from "./callOutComponents";

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
            bgImageStyle={{ backgroundSize: "cover" }}
            renderLayer={(percentage) => (
              <>
                {props.circle &&
                  props.circle.map((props, index) => (
                    <Circle key={index} {...props} percentage={percentage} />
                  ))}

                {props.title &&
                  props.title.map((props, index) => (
                    <TitleContainer key={index}>
                      <TitleText>{props.text}</TitleText>
                    </TitleContainer>
                  ))}

                {props.text &&
                  props.text.map((props, index) => (
                    <SubheadContainer key={index}>
                      <SubheadText>{props.text}</SubheadText>
                    </SubheadContainer>
                  ))}

                <LogoBug percentage={percentage} />
              </>
            )}
          >
            <FillerDiv style={{ height: props.height }}>
              {/* <Heading {...props} /> */}
            </FillerDiv>
          </Parallax>
          <Debugger {...props} />
        </div>
      ))}
    </>
  );
};

const Debugger = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "220px",
        height: "220px",
        background: props.backgroundColor,
        borderRadius: "10%",
        fontSize: "12px",
        lineHeight: "1.5",
        padding: "10px",
      }}
    >
      {props.circle.map((props, index) => {
        return (
          <div key={index}>
            <div>Radius: {props.radius}</div>
            <div>translateX: {props.translateX}</div>
            <div>backgroundColor: {props.backgroundColor}</div>
          </div>
        );
      })}

      {props.title.map((props, index) => {
        return (
          <div key={index}>
            <div>Title: {props.text}</div>
            <div>
              translateX: {props.translateX}, translateY: {props.translateY}
            </div>
          </div>
        );
      })}

      {props.text.map((props, index) => {
        return (
          <div key={index}>
            <div>Text: {props.text}</div>
            <div>
              translateX: {props.translateX}, translateY: {props.translateY}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalloutList;
