import { useState, useEffect } from "react";
import { LoopEndTime } from "./chartVision";
import {
  animationEnter,
  animationExit,
  ChartWrapper,
  BarOuter,
  BarInner,
  concatPercent,
} from "components/Callout/Chart/chartComponents";
import { BarLabel } from "components/Callout/Chart/barLabel";

export const ColumnVision = (props) => {
  const [columnIsEntering, setColumnIsEntering] = useState(0);
  const [labelHidden, setLabelHidden] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setColumnIsEntering(1);
    setLabelHidden(true);

    const showLabels = setTimeout(() => {
      setLabelHidden(false);
    }, 500);

    const columnAnimationEnd = setTimeout(() => {
      setColumnIsEntering(0);
      setLabelHidden(true);
    }, LoopEndTime - 3000);

    const loopIsOver = setTimeout(() => {
      setCount(count + 1);
    }, LoopEndTime);

    return () => {
      clearTimeout(columnAnimationEnd);
      clearTimeout(loopIsOver);
      clearTimeout(showLabels);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <ChartWrapper>
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
          <BarOuter key={index}>
            <BarInner
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

            <BarLabel
              hidden={labelHidden}
              label={props.label}
              index={index}
            />
          </BarOuter>
        )
      )}
    </ChartWrapper>
  );
};
