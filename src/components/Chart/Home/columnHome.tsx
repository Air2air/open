import { useState, useEffect } from "react";

import {
  animationEnter,
  animationExit,
  ChartWrapper,
  ColumnOuter,
  ColumnSeries,
  concatPercent,
} from "../ChartComponents/chartScaffold";
import { ColumnLabel } from "../ChartComponents/columnLabel";

export const ColumnHome = (props: any) => {
  const [columnIsEntering, setColumnsAreEntering] = useState(0);
  const [columnWidth, setColumnWidth] = useState("100%");
  const [labelVisible, setLabelVisible] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setColumnWidth("100%");
    setColumnsAreEntering(1);


    const showLabels = setTimeout(() => {
      setLabelVisible(true);
    }, 2000);

    const columnShrink = setTimeout(() => {
      setColumnWidth("50%");
      setLabelVisible(false);
    }, 7000);

    const columnExit = setTimeout(() => {
      setColumnsAreEntering(0);

      setLabelVisible(false);
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
            height: number;
            backgroundColor: string;
            title: string;
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
              visible={labelVisible}
              label={props.title}
              index={index}
            />
          </ColumnOuter>
        )
      )}
    </ChartWrapper>
  );
};
