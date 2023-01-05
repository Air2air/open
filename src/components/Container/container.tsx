import styled from "styled-components";
import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";
import { assignBackgroundColor } from "utils/assignBackgroundColor";

type ContainerProps = {
  backgroundColor?: any;
};

const Container = ({ children }: any, { backgroundColor }: ContainerProps) => {
  return (
    <>
      <ContainerOuter
        style={{
          background: backgroundColor
            ? assignBackgroundColor(backgroundColor)
            : "none",
        }}
      >
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
