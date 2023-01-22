import { useEffect, useState } from "react";
import {
  TitleContainer,
  TitleText,
  SubheadContainer,
  SubheadText,
  HeadingContainer,
  DescContainer,
} from "./headingComponents";

interface IHeading {
  id: number;
  title: string;
  subhead?: string;
  text?: string;
  description?: string;
}

const Heading = (props:IHeading) => {
  return (
    <HeadingContainer>
      <TitleContainer>
        <TitleText>{props.title}</TitleText>
      </TitleContainer>
      <SubheadContainer>
        <SubheadText>{props.text}</SubheadText>
      </SubheadContainer>
      <DescContainer>
      Graphics: {props.description}
      </DescContainer>
    </HeadingContainer>
  );
};

export default Heading;
