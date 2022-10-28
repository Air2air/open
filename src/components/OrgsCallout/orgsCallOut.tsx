import {
  CALLOUT_HEIGHT_PX,
  CONTENT_WIDTH,
} from "../../styles/Constants";
import styled from "styled-components";
import { dataOrgs } from "./../../data/orgs";

const OrgsItems = () => {
  const orgsMap = dataOrgs.map((props) => (
    <OrgImage
      src={`${process.env.PUBLIC_URL}/images/content/${props.image}`}
      alt={props.title}
    />
  ));
  return <>{orgsMap}</>;
};

const OrgsCallout = (props) => (
  <OrgsWrapper style={{ background: props.backgroundColor }}>
    <OrgInnerWrapper>
      <OrgsItems />
    </OrgInnerWrapper>
  </OrgsWrapper>
);

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
  min-height: ${CALLOUT_HEIGHT_PX};
`;

const OrgInnerWrapper = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  z-index: +1;
  height: auto;
  width: ${CONTENT_WIDTH};
  text-align: left;
`;

const OrgImage = styled.img`
  height: auto;
`;

export default OrgsCallout;
