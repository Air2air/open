import styled from "styled-components";
import Container from "./../Container/container";
import { TitleCallout } from "./../Title/titleCallout";
import { ReactComponent as MapSvg } from "./world_map.svg";
import "./keyframes.scss";
import { dataMap } from "./dataMap";
import { COLOR_RED } from "styles/Constants";
import setBodyColor from "./../../utils/setBodyColor";
import ReactTooltip from "react-tooltip";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const Map = (props) => {
  setBodyColor({ color: props.backgroundColor });
  return (
    <>
      <Container>
        <TitleCallout title={props.mapTitle} />
        <SVGContainer>
          <MapSvg
            style={{
              width: "100%",
              height: "100%",
              display: "inline-block",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          {dataMap.map((item, index) => (
            <MapPin
              data-tip={item.location}
              key={index}
              style={{ left: item.left, top: item.top }}
              animationTime={getRndInteger(2000, 3000) + "ms"}
            >
              <Tooltip padding="18px" type="dark" />
            </MapPin>
          ))}
        </SVGContainer>
        {/* <LocationNamesTable>
          {dataMap
            .sort((a, b) => a.location.localeCompare(b.location))
            .map((item, index) => (
              <div>{item.location}</div>
            ))}
        </LocationNamesTable> */}
      </Container>
    </>
  );
};

const dotSize = "20px";

const SVGContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  min-height: 2vw;
  padding-bottom: 44%;
  vertical-align: middle;
  /* overflow: hidden; */
`;

const Tooltip = styled(ReactTooltip)`
  font-size: 2rem;
`;

const MapPin = styled.div.attrs((props: { animationTime: string }) => props)`
  position: absolute;
  width: ${dotSize};
  height: ${dotSize};
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%, 0);
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    background: transparent;
    box-sizing: border-box;
    border: ${COLOR_RED} 2px solid;
  }
  &:before {
    animation: smallPulse ${(props) => props.animationTime} ease-out infinite;
  }

  &:after {
    animation: largePulse ${(props) => props.animationTime} ease-out infinite;
  }
`;

// const LocationNamesTable = styled.div`
//   padding-top: 32px;
//   display: grid;
//   grid-gap: 12px;
//   width: 100%;
//   color: ${COLOR_TEXT};
//   /* background: red; */

//   @media (min-width: ${BREAKPOINT}px) {
//     grid-template-columns: auto auto auto auto;
//   }
//   @media (max-width: ${BREAKPOINT}px) {
//     grid-template-columns: auto auto;
//   }
// `;

export default Map;
