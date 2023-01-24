export const CallOutCircle = (props) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          right: `${props.percentage * props.translateX}%`,
          top: `${props.percentage * props.translateY}%`,
          width: `${props.percentage * props.radius}px`,
          height: `${props.percentage * props.radius}px`,
          background: props.backgroundColor,
        }}
      ></div>
    </>
  );
};
