import Container from "components/Container/container";
import { FetchData } from "fetch/fetch";
import { ChartSection, ChartWrapper } from "../chartComponents";
import ColumnWhatWeDo from "./columnWhatWeDo";

const WhatWeDoChart = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {data && data.length > 0 ? (
        <Container backgroundColor={3}>
          <ChartSection>
            <ChartWrapper>
              {data.map((props, index) => {
                return (
                  <ColumnWhatWeDo
                  key={props.id}
                  index={index}
                  title={props.title}
                  label={props.label}
                  value={props.value} 
                  backgroundColor={props.backgroundColor}
                />
                );
              })}
            </ChartWrapper>
          </ChartSection>
        </Container>
      ) : (
        <div style={{ color: "white" }}>Data Fetch error in Page component</div>
      )}
    </>
  );
};


export default WhatWeDoChart;