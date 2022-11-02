import styled from "styled-components";
import {
  BREAKPOINT_PX,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "../../styles/Constants";

interface ContainerProps {
  backgroundColor?: string;
}

const Container = ({ children }, props: ContainerProps) => {
  return (
    <>
      <ContainerDiv
        style={{ background: props.backgroundColor && props.backgroundColor }}
      >
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
  @media (min-width: ${BREAKPOINT_PX}) {
    padding: 40px 0;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    padding: 40px 0;
    width: ${CONTENT_WIDTH_MOBILE};
  }
`;

export default Container;
