import { CALLOUT_HEIGHT_PX, CONTENT_WIDTH_DESKTOP } from "../../styles/Constants";
import styled from "styled-components";
import { dataOrgs } from "./../../data/orgs";

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
  min-height: ${CALLOUT_HEIGHT_PX};
`;

const OrgInnerWrapper = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  z-index: +1;
  height: auto;
  width: ${CONTENT_WIDTH_DESKTOP};
  text-align: left;
`;

const OrgMapImageRow = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(auto-fill, 210px);
  opacity: 0.5;
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
