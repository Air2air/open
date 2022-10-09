import React from "react";
import { ForceGraph2D } from "react-force-graph";
import { useNavigate } from "react-router-dom";
import nodeMap from "./data";

const nodeColor = (node) => {
  return getColorForPercentage(node.progress / 100);
};

const percentColors = [
  { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
  { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
  { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } },
];

const getColorForPercentage = function (pct) {
  for (var i = 1; i < percentColors.length - 1; i++) {
    if (pct < percentColors[i].pct) {
      break;
    }
  }
  var lower = percentColors[i - 1];
  var upper = percentColors[i];
  var range = upper.pct - lower.pct;
  var rangePct = (pct - lower.pct) / range;
  var pctLower = 1 - rangePct;
  var pctUpper = rangePct;
  var color = {
    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper),
  };
  return "rgb(" + [color.r, color.g, color.b].join(",") + ")";

};

let paintNode = (node, ctx, scale) => {
  ctx.beginPath();
  ctx.arc(node.x, node.y, 6, 0, 2 * Math.PI);
  ctx.fillStyle = nodeColor(node);

  ctx.fill();
  if (scale > 3) {
    ctx.beginPath();
    ctx.font = "1.4px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";

    let label = node.name + " - " + node.progress + "%";
  }
};

export default function Graph2() {
  const navigate = useNavigate();
  const handleNodeClick = function (node) {
    const newPageUrl = node.link;
    navigate(newPageUrl);
  };

  return (
    <ForceGraph2D
      width={500}
      height={600}
      graphData={nodeMap}
      enablePointerInteraction={true}
      nodeLabel="id"
      onNodeClick={handleNodeClick}
      nodeRelSize={8}
      nodeColor={nodeColor}
      nodeCanvasObject={paintNode}
      cooldownTime={55000}
      cooldownTicks={10000}
      linkColor={(_) => "rgba(255,255,255,0.3)"}
      backgroundColor="rgba(0,0,0,0)"
    />
  );
}
