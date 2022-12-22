import styled from "styled-components";
import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "constants/index";

type ContainerProps = {
  backgroundColor?: string;
}

const Container = ({ children }, props: ContainerProps) => {

  return (
    <>
      <ContainerDiv>
        {children}
      </ContainerDiv>
    </>
  );
};

const ContainerDiv = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: auto;
  /* background: green; */
  @media (min-width: ${BREAKPOINT}px) {
    padding: 40px 0;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 40px 0;
    width: ${CONTENT_WIDTH_MOBILE};
  }
`;

export default Container;
