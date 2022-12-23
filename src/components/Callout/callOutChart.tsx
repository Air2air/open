import styled from "styled-components";
import { BREAKPOINT } from "constants/index";
import BarColumn from "../Chart/PracticeAreas/barColumn";
// import { IBarColumnProps } from "interfaces/callouts";

// export interface IBarColumnMapProps {
//   items: Array<IBarColumnProps>;
// }

const CallOutChart = (data: any[]) => {
  return (
    <CallOutChartWrapper>
      {data.map((props) => (
        <BarColumn key={props.id} {...props} />
      ))}
    </CallOutChartWrapper>
  );
};

/* Chart Height */

const CallOutChartWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  @media (min-width: ${BREAKPOINT}px) {
    height: 150px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 150px;
  }
  background: gold;
`;

export default CallOutChart;
