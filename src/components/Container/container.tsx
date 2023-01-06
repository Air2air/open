import { type } from "os";
import styled from "styled-components";
import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";
import { assignBackgroundColor } from "utils/assignBackgroundColor";

type ContainerProps = {
  children: React.ReactNode;
  backgroundColor?: number | undefined;
};

const Container = ({ children, backgroundColor }: ContainerProps) => {


  // console.log("backgroundColor: ", backgroundColor);

  return (
    <>
      <ContainerOuter
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: assignBackgroundColor(backgroundColor),
          //backgroundColor: `#00${backgroundColor}`,
        }}
      >
        <ContainerInner>{children}</ContainerInner>
      </ContainerOuter>

    </>
  );
};

const ContainerOuter = styled.div`
  /* margin: auto auto; */
  height: 100%;
  width: 100%;
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
