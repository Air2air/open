import styled from "styled-components";
import { assignBackgroundColor } from "utils/assignBackgroundColor";

const Spacer = (props: { height: any; backgroundColor?: any }) => {
  return (
    <>
      <SpacerDiv
        style={{
          height: props.height,
          background: assignBackgroundColor(props),
        }}
      />
    </>
  );
};

export default Spacer;

const SpacerDiv = styled.div`
  width: 100vw;
`;
