import styled from "styled-components";

type SpacerProps = {
  height?: number;
};

export const Spacer = (props: SpacerProps) => {
  return (
    <>
      <SpacerDiv
        style={{
          height: props.height,
        }}
      />
    </>
  );
};

export default Spacer;

const SpacerDiv = styled.div<SpacerProps>`
  width: 100%;
`;
