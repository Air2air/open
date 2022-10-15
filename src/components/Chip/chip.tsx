import styled from "styled-components";
import LogoWhite from "./../../images/TS_Images/LogoWhite";
import {
  COLOR_BIO,
  COLOR_ELEVENS,
  COLOR_HEALTH,
  COLOR_MED,
  COLOR_PHARMA,
} from "./../../styles/Constants";

const ChipLogoSize = 12;

const Chip = (props: { section: string }) => {
  return (
    <>
      {props.section === "Bio" ? (
        <ChipWrapper className="bio">
          <LogoWhite size={ChipLogoSize} />
          <ChipText>{props.section}</ChipText>
        </ChipWrapper>
      ) : null}

      {props.section === "Health" ? (
        <ChipWrapper className="health">
          <LogoWhite size={ChipLogoSize} />
          <ChipText>{props.section}</ChipText>
        </ChipWrapper>
      ) : null}

      {props.section === "Med" ? (
        <ChipWrapper className="med">
          <LogoWhite size={ChipLogoSize} />
          <ChipText>{props.section}</ChipText>
        </ChipWrapper>
      ) : null}

      {props.section === "Pharma" ? (
        <ChipWrapper className="pharma">
          <LogoWhite size={ChipLogoSize} />
          <ChipText>{props.section}</ChipText>
        </ChipWrapper>
      ) : null}

      {props.section === "Elevens" ? (
        <ChipWrapper className="elevens">
          <LogoWhite size={ChipLogoSize} />
          <ChipText>{props.section}</ChipText>
        </ChipWrapper>
      ) : null}
    </>
  );
};

const ChipWrapper = styled.div`
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
