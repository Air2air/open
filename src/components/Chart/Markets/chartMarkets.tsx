import { ColumnMarkets } from "./columnMarkets";
import styled from "styled-components";
import Container from "components/Container/container";
import { ChartSection } from "../chartSection";

export const LoopEndTime = 14000;

const ChartMarkets = (props: { backgroundColor: any }) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <ChartSection>
        <ChartWrapper>
          <ColumnMarkets />
        </ChartWrapper>
      </ChartSection>
    </Container>
  );
};

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
  overflow: hidden;
  /* background: blue; */
`;

export default ChartMarkets;
