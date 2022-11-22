import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import { BREAKPOINT_PX } from "styles/Constants";

const BarColumn = (props: {
  id: any;
  height: number;
  label: string;
  color: string;
  backgroundColor: string;
}) => {
  return (
    <>
      <ColumnOuter>
        <ColumnSeries
          style={{
            height: props.height + "%",
            backgroundColor: props.backgroundColor,
          }}
          animateIn="animate__fadeInUp"
          delay={300}
          offset={60}
        >
          <Label
            style={{
              color: props.color,
            }}
            animateIn="animate__fadeIn"
            delay={1000}
            offset={60}
          >
            {props.label}
          </Label>
        </ColumnSeries>
      </ColumnOuter>
    </>
  );
};

const barMinHeightDesktop = "28%";
const barMinHeightMobile = "28%";

const ColumnOuter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  /* overflow: hidden; */
  flex: 1;
  @media (min-width: ${BREAKPOINT_PX}) {
    margin: 0 10px;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    margin: 0 5px;
    /* align-items: flex-start; */
    /* padding-top: 30px; */
  }
  /* background: blue; */
`;

const ColumnSeries = styled(AnimationOnScroll)`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  transition: all 200ms;
  width: 100%;
  @media (min-width: ${BREAKPOINT_PX}) {
    min-height: ${barMinHeightDesktop};
    align-items: flex-start;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    min-height: ${barMinHeightMobile};
    align-items: flex-end;
  }
  /* background: blue; */
`;

const Label = styled(AnimationOnScroll)`
  /* position: absolute; */
  /* bottom:0; */
  min-width: 100px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 200ms;
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 1rem;
    text-align: center;
    padding-top: 10px;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    transform: translate(0, -440%) rotate(90deg);
    font-size: 0.94rem;
  }
  /* background: red; */
`;

export default BarColumn;
