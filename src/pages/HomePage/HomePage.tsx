import React from "react";
import styled from "styled-components";
import NavHome from "../../components/Nav/Nav";

const HomePage = (props: any) => {
  return (
    <Container>
      <NavHome />
    </Container>
  );
};

const Container = styled.div`
  height: 100vy;
  width: 100vw;
`;

export default HomePage;
