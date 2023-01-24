export const Debugger = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "220px",
        height: "auto",
        // background: props.backgroundColor,
        borderRadius: "10%",
        fontSize: "12px",
        lineHeight: "1.5",
        padding: "10px",
      }}
    >
      {props.circle.map((props, index) => {
        return (
          <div key={index} style={{ background: "lightblue", padding: "7px" }}>
            <div>Radius: {props.radius}</div>
            <div>translateX: {props.translateX}</div>
            <div>backgroundColor: {props.backgroundColor}</div>
          </div>
        );
      })}

      {props.title.map((props, index) => {
        return (
          <div key={index} style={{ background: "white", padding: "7px" }}>
            <div>Title: {props.text}</div>
            <div>
              translateX: {props.translateX}, translateY: {props.translateY}
            </div>
          </div>
        );
      })}

      {props.text.map((props, index) => {
        return (
          <div key={index} style={{ background: "lightblue", padding: "7px" }}>
            <div>Text: {props.text}</div>
            <div>
              translateX: {props.translateX}, translateY: {props.translateY}
            </div>
          </div>
        );
      })}
    </div>
  );
};
