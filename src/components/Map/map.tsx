import styled from "styled-components";
import Container from "components/Container/container";
import { TitleCallout } from "components/Title/titleCallout";
import MapImage from "images/world_map.svg";
import { dataMap } from "./dataMap";
import { BREAKPOINT, COLOR_LINK } from "styles/Constants";
import { Key } from "react";
import { SVGContainer, MapImageDiv, Tooltip, MapInner } from "./mapComponents";

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const Map = (props: {
  backgroundColor: number;
  title: string | undefined;
}) => {
  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <MapInner>
          <TitleCallout title={props.title} />
          <SVGContainer>
            <MapImageDiv>
              <LMenuItem>
                <MapImage />
              </LMenuItem>
            </MapImageDiv>
            <MapPins data={dataMap} />
          </SVGContainer>
        </MapInner>
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

const MapPins = ({ data }) =>
  data.map(
    (
      item: { location: string; left: number; top: number },
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
    border: ${COLOR_LINK} 2px solid;
  }
  &:before {
    animation: smallPulse ${(props) => props.animationTime} ease-out infinite;
  }

  &:after {
    animation: largePulse ${(props) => props.animationTime} ease-out infinite;
  }
`;

export default Map;
