
import { useState, useEffect } from "react";
import {
  animationEnter,
  ColumnOuter,
  ColumnSeries,
} from "../ChartComponents/chartComponents";
import { CHART_COLUMN_TRANSITION } from "../ChartComponents/chartCSS";
import { ColumnLabel } from "../ChartComponents/columnLabel";

const ColumnPracticeAreas = (props, index) => {
  const [labelHidden, setLabelHidden] = useState(true);
  const [columnIsEntering, setColumnIsEntering] = useState(false);
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
    setColumnIsEntering(true);

    const interval = setInterval(() => {
      randomHeight();
    }, Math.random() * (maxInterval - minInterval) + minInterval);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLabelHidden(true);

    const showLabels = setTimeout(() => {
      setLabelHidden(false);
    }, 500);

    return () => {
      clearTimeout(showLabels);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animationString = `all ${CHART_COLUMN_TRANSITION}ms`;

  return (
    <>
      <ColumnOuter key={index}>
        <ColumnSeries
          style={{
            height: seriesRandomHeight + "%",
            backgroundColor: props.backgroundColor,
            transition: animationString,
            animation: columnIsEntering ? animationEnter(props.index) : "",
            // opacity: columnIsEntering ? 0 : 1,
          }}
        />
        <ColumnLabel
          hidden={labelHidden}
          label={props.label}
          index={props.index}
        />
      </ColumnOuter>
    </>
  );
};

export default ColumnPracticeAreas;
