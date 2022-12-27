import { CHART_COLUMN_TRANSITION, CHART_COLUMN_STAGGER } from "constants/index";
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
  const [columnsAreEntering, setColumnsAreEntering] = useState(0);
  const [columnWidth, setColumnWidth] = useState("100%");
  const [count, setCount] = useState(1);

  useEffect(() => {
    setColumnWidth("100%");
    setColumnsAreEntering(1);

    const columnShrink = setTimeout(() => {
      setColumnWidth("50%");
    }, 7000);

    const columnExit = setTimeout(() => {
      setColumnsAreEntering(0);
    }, props.loopEndTime - 2000);

    const loopIsOver = setTimeout(() => {
      setCount(count + 1);
    }, props.loopEndTime);

    return () => {
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
                animation: columnsAreEntering
                  ? animationEnter(index)
                  : animationExit(index),
                opacity: columnsAreEntering ? 0 : 1,
              }}
            />
            <ColumnLabel label={props.title} index={index} />
          </ColumnOuter>
        )
      )}
    </ChartWrapper>
  );
};
