import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <BubbleSection>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </BubbleSection>
      <ContentSection></ContentSection>
    </Container>
  );
}

const Container = styled.div`
display:flex;
width:100%;
height;100vy;
`;

const BubbleSection = styled.div`
  display: flex;
  flex: 1;
  height: 100vy;
`;

const ContentSection = styled.div`
  display: flex;
  flex: 1;
  height: 100vy;
`;
