import styled from "styled-components";
const logo_text_only = "url(/images/site/logo_text_only.svg)";

type LogoPenProps = {
  size?: number;
};

export const LogoPen = (props: LogoPenProps) => {
  return (
    <LogoWrapper
      style={{ height: props.size ? props.size + "px" : 30 + "px" }}
    />
  );
};

const LogoWrapper = styled.div`
  width: 110px;
  background: ${logo_text_only};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
