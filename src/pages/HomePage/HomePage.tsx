import React from "react";
import { Content } from "../../components/Content";
import AmChartsWrapper from "../../components/AmCharts/nav";

const HomePage = (props: any) => {
  return (
    <>
      <AmChartsWrapper strength={1} distance={1}/>
      <Content />
    </>
  );
};

export default HomePage;
