import styled from "styled-components";
import { assignBackgroundColor } from "utils/assignBackgroundColor";

type SpacerProps = {
  height?: number;
  backgroundColor?: any;
};

export const Spacer = (props: SpacerProps) => {
  return (
    <>
      <SpacerDiv
        style={{
          height: props.height,
          // background: assignBackgroundColor(props.backgroundColor),
        }}
      />
    </>
  );
};

export default Spacer;

const SpacerDiv = styled.div<SpacerProps>`
  width: 100vw;
`;
