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
            >
              {/* <MapPinTooltip>
                <div className="location">{item.location}</div>
                {item.member.map((member, index) => (
                  <div key={index}>
                    <div className="role">{member.role}</div>
                    <div className="vertical">{member.vertical}</div>
                  </div>
                ))}
              </MapPinTooltip> */}
            </MapPin>
          ))}
        </AnimationOnScroll>
      </SVGContainer>
    </Container>
  </>
);

const dotSize = "20px";
/* const toolTipWidth = "200px"; */
const animationBaseTime = "3s";

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

const MapPin = styled.div`
  position: absolute;
  width: ${dotSize};
  height: ${dotSize};
  /* transform-origin: center; */
  /* background-color: ${COLOR_TITLE_TEXT}; */
  border-radius: 50%;
  cursor: pointer;
  /* transition: all 0.3s ease-in-out; */
  &:hover {
    transform: scale(1.2);
    /* transform-origin: center; */
  }
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
    /* z-index: 1; */
  }

  &:before {
    animation: smallPulse ${animationBaseTime} ease-out infinite;
  }

  &:after {
    animation: largePulse ${animationBaseTime} ease-out infinite;
  }
`;

export default Map;
