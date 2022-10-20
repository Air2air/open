import { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  COLOR_BIO,
  COLOR_ELEVENS,
  COLOR_HEALTH,
  COLOR_MED,
  COLOR_PHARMA,
} from "../../styles/Constants";
import "./keyframes.css";

const Button = (props: { nextPath; nextName; section }) => {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  const animatedButtonStyle = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: "translateX(-30px)" },
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateX(-30px)",
    delay: 1300,
  });

  return (
    <>
      {props.section === "Bio" ? (
        <ButtonWrapper
          to={props.nextPath}
          style={animatedButtonStyle}
          className="bio"
        >
          <ButtonText>{props.nextName}</ButtonText>
        </ButtonWrapper>
      ) : null}

      {props.section === "Health" ? (
        <ButtonWrapper
          to={props.nextPath}
          style={animatedButtonStyle}
          className="health"
        >
          <ButtonText>{props.nextName}</ButtonText>
        </ButtonWrapper>
      ) : null}

      {props.section === "Med" ? (
        <ButtonWrapper
          to={props.nextPath}
          style={animatedButtonStyle}
          className="med"
        >
          <ButtonText>{props.nextName}</ButtonText>
        </ButtonWrapper>
      ) : null}

      {props.section === "Pharma" ? (
        <ButtonWrapper
          to={props.nextPath}
          style={animatedButtonStyle}
          className="pharma"
        >
          <ButtonText>{props.nextName}</ButtonText>
        </ButtonWrapper>
      ) : null}

      {props.section === "Elevens" ? (
        <ButtonWrapper
          to={props.nextPath}
          style={animatedButtonStyle}
          className="elevens"
        >
          <ButtonText>{props.nextName}</ButtonText>
        </ButtonWrapper>
      ) : null}
    </>
  );
};

const ButtonWrapper = styled(animated(Link))`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  height: 60px;
  padding: 0 30px;
  align-self: flex-end;
  &.bio {
    background: ${COLOR_BIO};
  }
  &.health {
    background: ${COLOR_HEALTH};
  }
  &.med {
    background: ${COLOR_MED};
  }
  &.pharma {
    background: ${COLOR_PHARMA};
  }
  &.elevens {
    background: ${COLOR_ELEVENS};
  }
`;

const ButtonText = styled.span`
  text-transform: uppercase;
  color: #fff;
  // margin-left: 8px;
`;

export default Button;
