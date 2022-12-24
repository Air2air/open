import styled from "styled-components";
import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "constants/index";
import { assignBackgroundColor } from "utils/assignBackgroundColor";

const Container = ({ children }: any, props: any) => {
  return (
    <>
      <OuterWrapper style={{ background: assignBackgroundColor(3) }}>
      {/* <OuterWrapper style={{ background: 'red' }}> */}
        <ContainerDiv>{children}</ContainerDiv>
      </OuterWrapper>
    </>
  );
};

const OuterWrapper = styled.div`
  position: relative;
  top: 0;
  height: auto;
  width: 100%;
  /* background-color: gold; */
`;

const ContainerDiv = styled.div`
  margin: 0 auto;
  height: auto;
  @media (min-width: ${BREAKPOINT}px) {
    padding: 10px 0;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 10px 0;
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: red; */
`;

export default Container;
