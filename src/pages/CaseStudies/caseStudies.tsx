import BannerVideo from "components/BannerVideo/videoBanner";
import {
  BREAKPOINT,
  COLOR_BASE,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "constants/index";
import Callout from "components/Callout/callOut";
import { dataCaseStudies } from "./dataCaseStudies";
import ColumnCaseStudies from "components/Chart/CaseStudies/columnCaseStudies";
import styled from "styled-components";

const CaseStudiesPage = () => {
  return (
    <>
      <BannerVideo
        text="casestudies"
        pageVideo={776446335}
        color="#ffffff"
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />

      {dataCaseStudies.map((props) => (
        <div key={props.id}>
          <ChartSection {...props} />
          <Callout {...props} />
        </div>
      ))}
    </>
  );
};

const ChartSection = (props: { practiceArea: any[] }) => (
  <CallOutChartWrapper>
    {props.practiceArea.map((props) => (
      <ColumnCaseStudies key={props.id} color="#ffffff" {...props} />
    ))}
  </CallOutChartWrapper>
);

const CallOutChartWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (min-width: ${BREAKPOINT}px) {
    height: 150px;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background:gold; */
`;

export default CaseStudiesPage;
