import styled from "styled-components";
import { assignBackgroundColor } from "utils/assignBackgroundColor";

type SpacerProps = {
  height?: number;
  backgroundColor?: number;
};

export const Spacer = (props: SpacerProps) => {
  return (
    <>
      {props.backgroundColor ? (
        <SpacerDiv
          style={{
            height: props.height,
            background: assignBackgroundColor(props.backgroundColor),
          }}
        />
      ) : (
        <SpacerDiv
          style={{
            height: props.height,
            background: assignBackgroundColor(0),
          }}
        />
      )}
    </>
  );
};

export default Spacer;

const SpacerDiv = styled.div<SpacerProps>`
  width: 100%;
`;
