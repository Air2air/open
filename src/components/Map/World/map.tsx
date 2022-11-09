import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import Container from "../../Container/container";
import { TitleCallout } from "../../Title/titleCallout";
import { ReactComponent as MapSvg } from "./world_map.svg";
import "./keyframes.scss";
import { dataMap } from "./dataMap";
import { COLOR_TITLE_TEXT } from "../../../styles/Constants";



const Map = (props) => (
  <>
    <Container>
      <TitleCallout titleText={props.mapTitle} />
      <SVGContainer>
        <AnimationOnScroll animateIn="animate__fadeIn" delay={0} offset={100}>
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
              key={index}
              className="sonar"
              style={{ left: item.left, top: item.top }}
              animationTime={getRndInteger(2000,3000) + "ms"}
            >
            </MapPin>
          ))}
        </AnimationOnScroll>
      </SVGContainer>
    </Container>
  </>
);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

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
/*
const MapPinTooltip = styled.div`
 position: absolute;
  top: 50%;
  left: 50%; 
  transform-origin: center; 

  width: ${toolTipWidth};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${COLOR_BASE_3};
  border-radius: 3px;
  padding: 12px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  z-index: +2;
  pointer-events: all;
  &:hover {
    opacity: 1;
  }
`;
*/



const MapPin = styled.div.attrs((props: {animationTime: string}) => props)`
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
    border: ${COLOR_TITLE_TEXT} 2px solid;
  }
  &:before {
    animation: smallPulse ${(props) => props.animationTime} ease-out infinite;
  }

  &:after {
    animation: largePulse ${(props) => props.animationTime} ease-out infinite;
  }
`;

export default Map;
