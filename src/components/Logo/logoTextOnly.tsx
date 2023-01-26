import styled from "styled-components";

const logo_text_only = "url(/images/site/logo_text_only.svg)";

export const LogoTextOnly = () => {
  return <LogoWrapper />;
};

const LogoWrapper = styled.div`
  height: 30px;
  width: 110px;
  background: ${logo_text_only};
  background-size: contain;
  background-repeat: no-repeat;
`;
