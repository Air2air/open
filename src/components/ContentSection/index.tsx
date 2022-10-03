import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  display: flex;
  flex: 1;
  height: auto;
  background:red;
`;

export const ContentSection = (...props) => {
  return (
    <ContentDiv>
      <h2>props.section</h2>
      <h2>props.title</h2>
      <h3>props.subhead</h3>
      <p>props.text</p>
    </ContentDiv>
  );
};
