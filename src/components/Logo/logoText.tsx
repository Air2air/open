import styled from "styled-components";

const backgroundImageText = "url(/images/site/logo_text.svg)";
const TRANSITION_SPEED = "0.25s";
const CHARACTER_PADDING = "0 0 4px 0";

export const LogoText = (props) => {
  const minWidthO = props.size * 0.95;
  const maxWidthO = props.size * 3.3;

  const minWidthP = props.size * 0.55;
  const maxWidthP = props.size * 3.5;

  const minWidthE = props.size * 0.57;
  const maxWidthE = props.size * 3.7;

  const minWidthN = props.size * 0.67;
  const maxWidthN = props.size * 4.9;

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget.id === "O") {
      e.currentTarget.style.width = maxWidthO + "px";
    }

    if (e.currentTarget.id === "P") {
      e.currentTarget.style.width = maxWidthP + "px";
    }

    if (e.currentTarget.id === "E") {
      e.currentTarget.style.width = maxWidthE + "px";
    }

    if (e.currentTarget.id === "N") {
      e.currentTarget.style.width = maxWidthN + "px";
    }
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget.id === "O") {
      e.currentTarget.style.width = minWidthO + "px";
    }

    if (e.currentTarget.id === "P") {
      e.currentTarget.style.width = minWidthP + "px";
    }

    if (e.currentTarget.id === "E") {
      e.currentTarget.style.width = minWidthE + "px";
    }

    if (e.currentTarget.id === "N") {
      e.currentTarget.style.width = minWidthN + "px";
    }
  };

  return (
    <LogoTextWrapper
      style={{
        height: props.size + "px",
      }}
    >
      <O
        id="O"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          height: props.size + "px",
          minWidth: minWidthO + "px",
          backgroundSize: props.size * 4 + "px",
          backgroundPositionY: 0,
        }}
      />
      <P
        id="P"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          height: props.size + "px",
          minWidth: minWidthP + "px",
          backgroundSize: props.size * 4 + "px",
          backgroundPositionY: -(props.size * 1.05) + "px",
        }}
      />
      <E
        id="E"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          height: props.size + "px",
          minWidth: minWidthE + "px",
          backgroundSize: props.size * 4 + "px",
          backgroundPositionY: -(props.size * 2.12) + "px",
        }}
      />
      <N
        id="N"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          height: props.size + "px",
          minWidth: minWidthN + "px",
          backgroundSize: props.size * 4 + "px",
          backgroundPositionY: -(props.size * 3.2) + "px",
        }}
      />
    </LogoTextWrapper>
  );
};

const LogoTextWrapper = styled.div`
  display: flex;
  min-width: 190px;
  transition: all ${TRANSITION_SPEED} ease-in-out;
  /* background: red; */
`;

const O = styled.div`
  padding: ${CHARACTER_PADDING};
  background: ${backgroundImageText} no-repeat;
  transition: all ${TRANSITION_SPEED} ease-in-out;
  overflow: visible;
  cursor: pointer;
  /* background-color: green; */
`;

const P = styled.div`
  padding: ${CHARACTER_PADDING};
  background: ${backgroundImageText} no-repeat;
  transition: all ${TRANSITION_SPEED} ease-in-out;
  overflow: visible;
  cursor: pointer;
  /* background-color: lightcoral; */
`;

const E = styled.div`
  padding: ${CHARACTER_PADDING};
  background: ${backgroundImageText} no-repeat;
  transition: all ${TRANSITION_SPEED} ease-in-out;
  overflow: visible;
  cursor: pointer;
  /* background-color: gold; */
`;

const N = styled.div`
  padding: ${CHARACTER_PADDING};
  background: ${backgroundImageText} no-repeat;
  transition: all ${TRANSITION_SPEED} ease-in-out;
  overflow: visible;
  cursor: pointer;
  /* background-color: lightcyan; */
`;
