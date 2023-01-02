import styled from "styled-components";
import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "constants/index";

type ContainerProps = {
  height?: number;
  backgroundColor?: number;
};

const Container = (
  { children }: any
) => {
  return (
    <>
      <ContainerOuter>
        <ContainerInner>{children}</ContainerInner>
      </ContainerOuter>
    </>
  );
};

const ContainerOuter = styled.div<ContainerProps>`
  margin: auto auto;
  height: auto;
  width: 100vw;
  /* background-color: gold; */
`;

const ContainerInner = styled.div`
  margin: 0 auto;
  height: auto;
  @media (min-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: red; */
`;

export default Container;
