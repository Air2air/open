import { ForceGraph2D } from "react-force-graph";
import { useNavigate } from "react-router-dom";
import { data } from "./data";
import { zoomLevel } from "./config";

const Graph = () => {
  const navigate = useNavigate();

  const handleNodeClick = function (node) {
    const newPageUrl = node.link;
    navigate(newPageUrl);
  };

  return (
    <ForceGraph2D
      graphData={data}
      width={window.innerWidth / 2.2 - 30}
      height={window.innerHeight / 1.8}
      // Nodes
      enablePointerInteraction={true}
      nodeLabel="id"
      onNodeClick={handleNodeClick}
      // onNodeHover={handleNodeHover}
      nodeVal="nodeSize"
      // Links
      linkWidth="linkSize"
      linkCurvature="curvature" //{0.5}
      linkDirectionalParticles="particleCount"
      linkDirectionalParticleSpeed={(d) => 5 * 0.001}
      linkDirectionalParticleWidth="particleSize"
      // Config
      minZoom={zoomLevel}
      maxZoom={zoomLevel}
      cooldownTime={9000}
      cooldownTicks={1500}
      d3AlphaDecay={0.01}
      d3VelocityDecay={0.84}
      // Colors
      nodeColor="nodeColor" //{hoverNode ? "red" : "nodeColor"}
      linkColor="linkColor"
      backgroundColor="rgba(0, 0, 0, 0)"
    />
  );
};

export default Graph;
