import { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import LogoWhite from "./../../images/TS_Images/LogoWhite";
import {
  COLOR_BIO,
  COLOR_ELEVENS,
  COLOR_HEALTH,
  COLOR_MED,
  COLOR_PHARMA,
} from "./../../styles/Constants";
import "./keyframes.css";

const ChipLogoSize = 12;

const Chip = (props: { section: string }) => {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  // const animatedChipStyle = useSpring({
  //   config: config.molasses,
  //   from: { opacity: 0, transform: "translateY(-30px)" },
  //   opacity: show ? 1 : 0,
  //   transform: show ? "translateY(0)" : "translateY(-30px)",
  //   delay: 600,
  //   duration: 1000,
  // });

  const animatedChipStyle = useSpring({
    config: config.molasses,
    from: { opacity: 0 },
    opacity: show ? 1 : 0,
    //transform: show ? "translateY(0)" : "translateY(-30px)",
    delay: 600,
    duration: 1000,
  });

  return (
    <>
      {props.section === "Bio" ? (
        <ChipWrapper style={animatedChipStyle} className="bio">
          <LogoWhite size={ChipLogoSize} />
          <ChipText>{props.section}</ChipText>
        </ChipWrapper>
      ) : null}

      {props.section === "Health" ? (
        <ChipWrapper style={animatedChipStyle} className="health">
          <LogoWhite size={ChipLogoSize} />
          <ChipText>{props.section}</ChipText>
        </ChipWrapper>
      ) : null}

      {props.section === "Med" ? (
        <ChipWrapper style={animatedChipStyle} className="med">
          <LogoWhite size={ChipLogoSize} />
          <ChipText>{props.section}</ChipText>
        </ChipWrapper>
      ) : null}

      {props.section === "Pharma" ? (
        <ChipWrapper style={animatedChipStyle} className="pharma">
          <LogoWhite size={ChipLogoSize} />
          <ChipText>{props.section}</ChipText>
        </ChipWrapper>
      ) : null}

      {props.section === "Elevens" ? (
        <ChipWrapper style={animatedChipStyle} className="elevens">
          <LogoWhite size={ChipLogoSize} />
          <ChipText>{props.section}</ChipText>
        </ChipWrapper>
      ) : null}
    </>
  );
};

const ChipWrapper = styled(animated.div)`
  display: flex;
  align-items: center;
  width: 100px;
  padding: 6px;
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

const ChipText = styled.span`
  text-transform: uppercase;
  color: #fff;
  margin-left: 8px;
`;

export default Chip;
