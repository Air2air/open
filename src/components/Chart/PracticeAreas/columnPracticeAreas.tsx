import { useState, useEffect } from "react";
import { ColumnOuter, ColumnSeries } from "../ChartComponents/chartScaffold";
import { ColumnLabel } from "../ChartComponents/columnLabel";

const ColumnPracticeAreas = (props) => {
  const [seriesRandomHeight, setSeriesRandomHeight] = useState(50);

  const minHeight = 20;
  const maxHeight = 100;

  const randomHeight = () => {
    const randomNumber = Math.random() * (maxHeight - minHeight) + minHeight;
    setSeriesRandomHeight(randomNumber);
  };

  const minInterval = 3000;
  const maxInterval = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      randomHeight();
    }, Math.random() * (maxInterval - minInterval) + minInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <ColumnOuter>
      <ColumnSeries
        style={{
          height: seriesRandomHeight + "%",
          backgroundColor: props.backgroundColor,
        }}
      />
      <ColumnLabel label={props.title} index={props.id} />
    </ColumnOuter>
  );
};

export default ColumnPracticeAreas;
