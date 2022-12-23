import styled from "styled-components";

const Spacer = (props: { height: any; }) => {
  return (
    <>
      <SpacerDiv style={{ height: props.height }} />
    </>
  );
};

export default Spacer;

const SpacerDiv = styled.div`
  width: 100vw;
`;
