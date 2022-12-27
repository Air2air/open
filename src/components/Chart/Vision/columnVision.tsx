import { useState, useEffect } from "react";
import { LoopEndTime } from "./chartVision";
import {
  animationEnter,
  animationExit,
  ChartWrapper,
  ColumnOuter,
  ColumnSeries,
  concatPercent,
} from "../ChartComponents/chartScaffold";
import { ColumnLabel } from "../ChartComponents/columnLabel";

export const ColumnVision = (props) => {
  const [columnIsEntering, setColumnIsEntering] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setColumnIsEntering(1);

    const columnAnimationEnd = setTimeout(() => {
      setColumnIsEntering(0);
    }, LoopEndTime - 4000);

    const loopIsOver = setTimeout(() => {
      setCount(count + 1);
    }, LoopEndTime);

    return () => {
      clearTimeout(columnAnimationEnd);
      clearTimeout(loopIsOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <ChartWrapper>
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

            <ColumnLabel label={props.title} index={index} />
          </ColumnOuter>
        )
      )}
    </ChartWrapper>
  );
};
