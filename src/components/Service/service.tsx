import styled from "styled-components";
import { ServiceItemCombined, ServiceItemLeft, ServiceItemRight } from "./serviceItem";
import { dataService } from "./dataService";
import {
  BREAKPOINT,
  COLOR_BASE_LIGHT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "../../styles/Constants";
import { useState, useEffect } from "react";

const Service = () => {
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
          <ServiceContainerDesktop>
            <ServiceItemColumn
              style={{ borderRight: `2px solid ${COLOR_BASE_LIGHT}` }}
            >
              <ServiceLeft />
            </ServiceItemColumn>
            <ServiceItemColumn style={{ marginTop: "40px" }}>
              <ServiceRight />
            </ServiceItemColumn>
          </ServiceContainerDesktop>
        </>
      ) : (
        <>
          <ServiceContainerMobile>
            <ServiceCombined />
          </ServiceContainerMobile>
        </>
      )}
    </>
  );
};

const ServiceLeft = () => {
  const serviceMap = dataService
    .filter((u) => u.side === "left")
    .map((props) => (
      <ServiceItemLeft
        key={props.id}
        id={props.id}
        title={props.title}
        desc={props.desc}
      />
    ));
  return <>{serviceMap}</>;
};

const ServiceRight = () => {
  const serviceMap = dataService
    .filter((u) => u.side !== "left")
    .map((props) => (
      <ServiceItemRight
        key={props.id}
        id={props.id}
        title={props.title}
        desc={props.desc}
      />
    ));
  return <>{serviceMap}</>;
};

const ServiceCombined = () => {
  const serviceMap = dataService
    .map((props) => (
      <ServiceItemCombined
        key={props.id}
        id={props.id}
        title={props.title}
        desc={props.desc}
      />
    ));
  return <>{serviceMap}</>;
};

const ServiceContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: ${CONTENT_WIDTH_DESKTOP};
`;

const ServiceContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${CONTENT_WIDTH_MOBILE};
`;

const ServiceItemColumn = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default Service;
