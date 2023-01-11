import { ColumnHome } from "./columnHome";
import Container from "components/Container/container";
import { ChartSection } from "components/Chart/chartComponents";
import { FetchData } from "fetch/fetch";

const HomeChart = ({ jsonFile }) => {
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
    <Container backgroundColor={2}>
      <ChartSection>
        <ColumnHome data={data} loopEndTime={120000} />
      </ChartSection>
    </Container>
  );
};

export default HomeChart;
