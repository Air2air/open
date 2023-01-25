import styled from "styled-components";

const backgroundImageBug = "url(/images/site/logo_bug.svg)";

export const LogoBug = (props) => {
  return (
    <LogoWrapper
      style={{
        height: props.size + "px",
        width: props.size + "px",
        background: backgroundImageBug,
      }}
    />
  );
};

const LogoWrapper = styled.div`
  background-size: contain;

`;
