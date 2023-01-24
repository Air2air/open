

export const Circle = (props) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          right: `${props.percentage * props.translateX}%`,
          top: `${props.percentage * props.translateY}%`,
          borderRadius: "50%",
          width: `${props.percentage * props.radius}px`,
          height: `${props.percentage * props.radius}px`,
          background: props.backgroundColor,
        }}
      ></div>
    </>
  );
};
