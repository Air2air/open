import styled from "styled-components";
import { EngagementItemCombined, EngagementItemLeft, EngagementItemRight } from "./engagementItem";
import { dataEngagement } from "./dataEngagement";
import {
  BREAKPOINT,
  COLOR_BASE_LIGHT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "../../styles/Constants";
import { useState, useEffect } from "react";

const Engagement = () => {
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
          <EngagementContainerDesktop>
            <EngagementItemColumn
              style={{ borderRight: `2px solid ${COLOR_BASE_LIGHT}` }}
            >
              <EngagementLeft />
            </EngagementItemColumn>
            <EngagementItemColumn style={{ marginTop: "40px" }}>
              <EngagementRight />
            </EngagementItemColumn>
          </EngagementContainerDesktop>
        </>
      ) : (
        <>
          <EngagementContainerMobile>
            <EngagementCombined />
          </EngagementContainerMobile>
        </>
      )}
    </>
  );
};

const EngagementLeft = () => {
  const engagementMap = dataEngagement
    .filter((u) => u.side === "left")
    .map((props) => (
      <EngagementItemLeft
        key={props.id}
        id={props.id}
        title={props.title}
        desc={props.desc}
      />
    ));
  return <>{engagementMap}</>;
};

const EngagementRight = () => {
  const engagementMap = dataEngagement
    .filter((u) => u.side !== "left")
    .map((props) => (
      <EngagementItemRight
        key={props.id}
        id={props.id}
        title={props.title}
        desc={props.desc}
      />
    ));
  return <>{engagementMap}</>;
};

const EngagementCombined = () => {
  const engagementMap = dataEngagement
    .map((props) => (
      <EngagementItemCombined
        key={props.id}
        id={props.id}
        title={props.title}
        desc={props.desc}
      />
    ));
  return <>{engagementMap}</>;
};

const EngagementContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: ${CONTENT_WIDTH_DESKTOP};
`;

const EngagementContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${CONTENT_WIDTH_MOBILE};
`;

const EngagementItemColumn = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default Engagement;
