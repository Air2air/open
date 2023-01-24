import styled from "styled-components";

export const FillerDiv = styled.div`
  position: "absolute";
  width: 100%;
`;

const logoBug = "/images/site/logo_bug_white.svg";

export const LogoBug = ({ percentage }) => {
  return (
    <div
      style={{
        position: "absolute",
        background: `url(${logoBug}) no-repeat center center`,
        right: percentage * 500,
        width: percentage * 500,
        height: percentage * 500,
      }}
    />
  );
};
