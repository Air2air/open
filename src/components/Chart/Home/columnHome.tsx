import { useState, useEffect } from "react";
import {
  animationEnter,
  animationExit,
  ChartWrapper,
  ColumnOuter,
  ColumnSeries,
  concatPercent,
} from "../ChartComponents/chartComponents";
import { ColumnLabel } from "../ChartComponents/columnLabel";

export const ColumnHome = (props: any) => {
  const [columnIsEntering, setColumnIsEntering] = useState(0);
  const [columnWidth, setColumnWidth] = useState("100%");
  const [labelHidden, setLabelHidden] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setColumnWidth("100%");
    setColumnIsEntering(1);
    setLabelHidden(true);

    const showLabels = setTimeout(() => {
      setLabelHidden(false);
    }, 500);

    const columnShrink = setTimeout(() => {
      setColumnWidth("50%");
      setLabelHidden(true);
    }, 7000);

    const columnExit = setTimeout(() => {
      setColumnIsEntering(0);
      setLabelHidden(true);
    }, props.loopEndTime - 2000);

    const loopIsOver = setTimeout(() => {
      setCount(count + 1);
    }, props.loopEndTime);

    return () => {
      clearTimeout(showLabels);
      clearTimeout(columnShrink);
      clearTimeout(columnExit);
      clearTimeout(loopIsOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <ChartWrapper style={{ width: columnWidth }}>
      {props.data.map(
        (
          props: {
            id: number;
            title: string;
            label: string;
            height: number;
            backgroundColor: string;
          },
          index: number
        ) => (
          <ColumnOuter key={index}>
            <ColumnSeries
              key={props.id}
              style={{
                height: concatPercent(props.height),
                backgroundColor: props.backgroundColor,
                animation: columnIsEntering
                  ? animationEnter(index)
                  : animationExit(index),
                opacity: columnIsEntering ? 0 : 1,
              }}
            />
            <ColumnLabel
              hidden={labelHidden}
              label={props.label}
              index={index}
            />
          </ColumnOuter>
        )
      )}
    </ChartWrapper>
  );
};
