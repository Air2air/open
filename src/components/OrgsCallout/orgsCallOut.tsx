import {
  BREAKPOINT,
  CALLOUT_HEIGHT,
  COLOR_BASE_3,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "constants/index";
import styled from "styled-components";
import { dataOrgs } from "./dataOrgs";

const OrgsItems = () => {
  const orgsMap = dataOrgs.map((props) => (
    <OrgMapImageWrapper key={props.id}>
      <OrgMapImage
        src={`${process.env.PUBLIC_URL}/images/content/${props.image}`}
        alt={props.title}
        width={props.width}
      />
    </OrgMapImageWrapper>
  ));
  return <>{orgsMap}</>;
};

const OrgsCallout = (props) => (
  <OrgsWrapper style={{ background: props.backgroundColor }}>
    <OrgInnerWrapper>
      <OrgMapImageRow>
        <OrgsItems />
      </OrgMapImageRow>
    </OrgInnerWrapper>
  </OrgsWrapper>
);

const orgImageHeight = "100px";

const OrgsWrapper = styled.div`
  position: relative;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  min-height: ${CALLOUT_HEIGHT}px;
  background: ${COLOR_BASE_3};
  @media (min-width: ${BREAKPOINT}px) {
    margin-top: 60px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 40px;
  }
`;

const OrgInnerWrapper = styled.div`
  margin: 0 auto;

  z-index: +1;
  height: auto;
  @media (min-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_DESKTOP};
    padding: 50px 0;
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
    padding: 20px 0;
  }
`;

const OrgMapImageRow = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0px;
  opacity: 0.5;

  @media (min-width: ${BREAKPOINT}px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: ${BREAKPOINT}px) {
    grid-template-columns: auto auto;
  }
  /* background: red; */
`;

const OrgMapImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${orgImageHeight};
  /* background: gold; */
`;

const OrgMapImage = styled.img`
  height: auto;
`;

export default OrgsCallout;
