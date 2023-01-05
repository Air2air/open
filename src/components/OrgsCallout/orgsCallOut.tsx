import {
  BREAKPOINT,
  COLOR_BASE_3,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";
import { useQuery } from "react-query";
import styled from "styled-components";
import { assignBackgroundColor } from "utils/assignBackgroundColor";

const dataSource = "/data/dataOrgs.json";
const queryName = "orgs";

const OrgsCallout = (props) => {
  const fetchData = async () => {
    const res = await fetch(dataSource, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.json();
  };
  const { data, status } = useQuery(queryName, fetchData);

  const isMobile = window.innerWidth < BREAKPOINT;

  function resizeImage(width, isMobile) {
    if (isMobile) {
      return width * 0.6;
    } else {
      return width;
    }
  }

  return (
    <>
      {status === "error" && (
        <OrgsWrapper style={{ background: "red" }}>
          <div style={{ color: "white" }}>Data fetch error at {dataSource}</div>
        </OrgsWrapper>
      )}
      {status === "loading" && (
        <OrgsWrapper style={{ background: "red" }}>
          <div style={{ color: "white" }}>Loading from {dataSource}</div>
        </OrgsWrapper>
      )}
      {status === "success" && (
        <>
          <OrgsWrapper
            style={{ background: assignBackgroundColor(props.backgroundColor) }}
          >
            <OrgInnerWrapper>
              <OrgMapImageRow>
                {data.map((props, index) => (
                  <OrgMapImageWrapper key={index}>
                    <OrgMapImage
                      src={`images/content/${props.image}`}
                      alt={props.title}
                      width={resizeImage(props.width, isMobile)}
                    />
                  </OrgMapImageWrapper>
                ))}
              </OrgMapImageRow>
            </OrgInnerWrapper>
          </OrgsWrapper>
        </>
      )}
    </>
  );
};

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
  background: ${COLOR_BASE_3};
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
  grid-template-columns: auto auto auto;

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
