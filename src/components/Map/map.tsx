import styled from "styled-components";
import Container from "./../Container/container";
import { TitleCallout } from "./../Title/titleCallout";
import MapImage from "images/world_map.svg";

import "./keyframes.scss";
import { dataMap } from "./dataMap";
import {
  BREAKPOINT,
  COLOR_RED,
} from "styles/Constants";
import ReactTooltip from "react-tooltip";
import { Key } from "react";
import { MAP_HEIGHT_DESKTOP, MAP_HEIGHT_MOBILE } from "./mapCSS";

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const Map = (props: { backgroundColor: any; title: string | undefined }) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <PaddingSection>
          <TitleCallout title={props.title} />
          <SVGContainer>
            <MapImageDiv>
              <LMenuItem children={<MapImage />} />
            </MapImageDiv>
            <MapPins data={dataMap} />
          </SVGContainer>
        </PaddingSection>
      </Container>
    </>
  );
};

type Props = {
  children: React.ReactNode;
};
export const LMenuItem = ({ children }: Props) => (
  <MapImageDiv>{children}</MapImageDiv>
);

const SVGContainer = styled.div`
  /* display: inline-block; */
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  /* padding-bottom: 44%; */
  vertical-align: middle;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${MAP_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${MAP_HEIGHT_MOBILE}px;
  }
  /* background: ${COLOR_RED}; */
`;




const mapSectionPaddingDesktop = 50;
const mapSectionPaddingMobile = 20;

const PaddingSection = styled.div`
  width: "100%";
  @media (min-width: ${BREAKPOINT}px) {
    height: auto;
    padding: ${mapSectionPaddingDesktop}px 0;
  }

  @media (max-width: ${BREAKPOINT}px) {
    height: auto;
    padding: ${mapSectionPaddingMobile}px 0;
  }
  /* background: gold; */

`;

const MapImageDiv = styled.div`
  > svg {
    z-index: +1;
    position: "absolute";
    top: 0;
    left: 0;
    /* display: "inline-block"; */
    width: 100%;
    @media (min-width: ${BREAKPOINT}px) {
      height: ${MAP_HEIGHT_DESKTOP}px;
    }
    @media (max-width: ${BREAKPOINT}px) {
      height: ${MAP_HEIGHT_MOBILE}px;
    }
  }
    /* background: gold; */
`;

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
