import styled from "styled-components";
import Container from "./../Container/container";
import { TitleCallout } from "./../Title/titleCallout";
import { ReactComponent as MapSvg } from "./world_map.svg";
import "./keyframes.scss";
import { dataMap } from "./dataMap";
import { BREAKPOINT, COLOR_RED } from "constants/index";
import ReactTooltip from "react-tooltip";
import { Key } from "react";

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const Map = (props) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <PaddingSection>
          <TitleCallout title={props.title} />
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
            <MapPins data={dataMap} />
          </SVGContainer>
        </PaddingSection>
      </Container>
    </>
  );
};

const MapPins = ({ data }) =>
  data.map(
    (
      item: { location: any; left: any; top: any },
      index: Key | null | undefined
    ) => (
      <MapPin
        data-tip={item.location}
        key={index}
        style={{ left: item.left, top: item.top }}
        animationTime={getRndInteger(2000, 3000) + "ms"}
      >
        <Tooltip padding="18px" type="dark" />
      </MapPin>
    )
  );

const PaddingSection = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    padding: 50px 0;
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 20px 0;
  }
`;

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

const dotSizeDesktop = "20px";
const dotSizeMobile = "10px";

const MapPin = styled.div.attrs((props: { animationTime: string }) => props)`
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%, 0);
  @media (min-width: ${BREAKPOINT}px) {
    width: ${dotSizeDesktop};
    height: ${dotSizeDesktop};
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${dotSizeMobile};
    height: ${dotSizeMobile};
  }
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

export default Map;
