import { useEffect, useState } from "react";
import {
  TitleContainer,
  TitleText,
  SubheadContainer,
  SubheadText,
  HeadingContainer,
} from "./headingComponents";

interface Data {
  id: number;
  title: string;
  subhead?: string;
  text?: string;
}

const Heading = (props) => {
  return (
    <HeadingContainer>
      <TitleContainer>
        <TitleText>{props.title}</TitleText>
      </TitleContainer>
      <SubheadContainer>
        <SubheadText>{props.text}</SubheadText>
      </SubheadContainer>
    </HeadingContainer>
  );
};

export default Heading;
