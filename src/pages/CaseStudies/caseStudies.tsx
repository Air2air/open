import BannerVideo from "components/VideoBanner/videoBanner";
import {
  BREAKPOINT,
  COLOR_BASE,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "constants/index";
import Callout from "components/Callout/callOut";
import { dataCaseStudies } from "./dataCaseStudies";
import styled from "styled-components";
import BarColumn from "components/Chart/PracticeAreas/columnPracticeAreas";

const pageVideo = 776446335;


const CaseStudiesPage = () => {
  return (
    <>
      <BannerVideo
        title="Case Studies Page Title"
        text="Case Studies Page SubTitle, Case Studies Page SubTitle, Case Studies Page SubTitle, Case Studies Page SubTitle"
        pageVideo={pageVideo}
        color="#ffffff"
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      {dataCaseStudies.map((props) => (
        <div key={props.id}>
          {/* <ChartSection {...props} /> */}
          <Callout {...props} />
        </div>
      ))}
    </>
  );
};

const ChartSection = (props: { practiceArea: any[]; }) => (
  <CallOutChartWrapper>
    {props.practiceArea.map((props) => (
      <BarColumn key={props.id} color="#ffffff" {...props} />
    ))}
  </CallOutChartWrapper>
);

const CallOutChartWrapper = styled.div`
margin:0 auto;
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
