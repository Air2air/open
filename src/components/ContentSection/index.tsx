import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  display: flex;
  flex: 1;
  height: auto;
  background: red;
`;

export const ContentSection = (props: { data: any[] }) => {
  return (
    <div>
      {props.data.map((item: any) => (
        <>
          <h2>{item.section}</h2>
          <h2>{item.title}</h2>
          <h3>{item.subhead}</h3>
          <p>{item.text}</p>
        </>
      ))}
    </div>
  );
};
