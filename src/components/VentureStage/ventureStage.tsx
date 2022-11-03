import styled from "styled-components";
import { VentureStageItemCombined, VentureStageItemLeft, VentureStageItemRight } from "./ventureStageItem";
import { dataVentureStage } from "./dataVentureStage";
import {
  BREAKPOINT,
  COLOR_BASE_LIGHT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "../../styles/Constants";
import { useState, useEffect } from "react";

const VentureStage = () => {
  /*------ Responsive -------*/
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      {width > BREAKPOINT ? (
        <>
          <VentureStageContainerDesktop>
            <VentureStageItemColumn
              style={{ borderRight: `2px solid ${COLOR_BASE_LIGHT}` }}
            >
              <VentureStageLeft />
            </VentureStageItemColumn>
            <VentureStageItemColumn style={{ marginTop: "40px" }}>
              <VentureStageRight />
            </VentureStageItemColumn>
          </VentureStageContainerDesktop>
        </>
      ) : (
        <>
          <VentureStageContainerMobile>
            <VentureStageCombined />
          </VentureStageContainerMobile>
        </>
      )}
    </>
  );
};

const VentureStageLeft = () => {
  const ventureStageMap = dataVentureStage
    .filter((u) => u.side === "left")
    .map((props) => (
      <VentureStageItemLeft
        key={props.id}
        id={props.id}
        title={props.title}
        desc={props.desc}
      />
    ));
  return <>{ventureStageMap}</>;
};

const VentureStageRight = () => {
  const ventureStageMap = dataVentureStage
    .filter((u) => u.side !== "left")
    .map((props) => (
      <VentureStageItemRight
        key={props.id}
        id={props.id}
        title={props.title}
        desc={props.desc}
      />
    ));
  return <>{ventureStageMap}</>;
};

const VentureStageCombined = () => {
  const ventureStageMap = dataVentureStage
    .map((props) => (
      <VentureStageItemCombined
        key={props.id}
        id={props.id}
        title={props.title}
        desc={props.desc}
      />
    ));
  return <>{ventureStageMap}</>;
};

const VentureStageContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: ${CONTENT_WIDTH_DESKTOP};
`;

const VentureStageContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${CONTENT_WIDTH_MOBILE};
`;

const VentureStageItemColumn = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default VentureStage;
