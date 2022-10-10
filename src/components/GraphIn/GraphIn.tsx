import React from "react";
import ReactDOM from "react-dom";
import Graphin, { Utils } from "@antv/graphin";

import "@antv/graphin/dist/index.css";
import { Background } from "react-flow-renderer";
// import "./styles.css";

const GraphIn = () => {
  const data = Utils.mock(16)
    .circle()
    .graphin();

  return (
    <div className="App">
      <Graphin
      theme={{ mode: 'dark' }}
        data={data}
        layout={{
          name: "radial",
          options: {
            center: [window.innerWidth / 2, window.innerHeight / 2], // 可选，中心点坐标
            preventOverlap: true, // 可选，是否防止覆盖
            nodeSize: 100, // 可选，节点大小
            unitRadius: 150 // 可选，每层的半径
          }
        }}
      />
    </div>
  );
};

export default GraphIn
