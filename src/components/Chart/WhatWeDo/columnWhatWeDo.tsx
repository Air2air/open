
import { useState, useEffect } from "react";
import {
  animationEnter,
  BarOuter,
  BarInner,
  CHART_COLUMN_TRANSITION,
} from "components/Chart/chartComponents";
import { BarLabel } from "components/Chart/barLabel";

const ColumnWhatWeDo = (props, index) => {
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
      <BarOuter key={index}>
        <BarInner
          style={{
            height: seriesRandomHeight + "%",
            backgroundColor: props.backgroundColor,
            transition: animationString,
            animation: columnIsEntering ? animationEnter(props.index) : "",
            // opacity: columnIsEntering ? 0 : 1,
          }}
        />
        <BarLabel
          hidden={labelHidden}
          label={props.label}
          index={props.index}
        />
      </BarOuter>
    </>
  );
};

export default ColumnWhatWeDo;
