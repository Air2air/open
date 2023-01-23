import styled from "styled-components";

export const Circle = ({ percentage }) => {
  return (
    <div
      style={{
        position: "absolute",
        background: `rgba(255, 125, 0, ${percentage * 1})`,
        left: "50%",
        top: "50%",
        borderRadius: "50%",
        transform: "translate(-50%,-50%)",
        width: percentage * 500,
        height: percentage * 500,
      }}
    />
  );
};

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
        // transform: "translate(-50%,-50%)",
        right:percentage * 500,
        width: percentage * 500,
        height: percentage * 500,
      }}
    />
  );
};

const blades = "/images/content/blades.svg";

export const Blades = ({ percentage }) => {
  return (
    <div
      style={{
        position: "absolute",
        background: `url(${blades}) no-repeat center center`,
        width: percentage * 500,
        height: percentage * 500,
        // transform: rotate(`${percentage}deg`)
      }}
    />
  );
};