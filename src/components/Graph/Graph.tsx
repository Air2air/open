import { ForceGraph2D } from "react-force-graph";
import { useNavigate } from "react-router-dom";

const data = {
  nodes: [
    { id: "Home", link: "home" },
    { id: "BioTech", link: "biotech" },
    { id: "HealthTech", link: "healthtech" },
    { id: "MedTech", link: "medtech" },
    { id: "PharmaTech", link: "pharmatech" },
    { id: "About", link: "about" },
  ],
  links: [
    { source: "Home", target: "About", value: 3 },
    { source: "BioTech", target: "HealthTech", value: 3 },
    { source: "HealthTech", target: "MedTech", value: 3 },
    { source: "MedTech", target: "PharmaTech", value: 5 },
    { source: "PharmaTech", target: "About", value: 5 },
    { source: "About", target: "Home", value: 5 },
  ],
};

const NODE_SIZE = 8;
const LINK_WIDTH = 9;

const Graph = (props: { link?: string }) => {
  const handleNodeClick = function (node) {
    const newPageUrl = node.link;
    navigate(newPageUrl);
  };

  const navigate = useNavigate();

  return (
    <ForceGraph2D
      graphData={data}
      width={500}
      height={600}
      enablePointerInteraction={true}
      nodeLabel="id"
      onNodeClick={handleNodeClick}
      nodeRelSize={NODE_SIZE}
      linkCurvature="curvature" //linkCurvature={0.5}
      linkDirectionalParticles="value"
      linkDirectionalParticleSpeed={(d) => 5 * 0.001}
      linkDirectionalParticleWidth={3}
      linkDirectionalParticleColor="rgba(255,255,255,1)"
      linkWidth={LINK_WIDTH}
      cooldownTime={55000}
      cooldownTicks={10000}
      nodeColor={(_) => "rgba(255,255,255,1)"}
      linkColor={(_) => "rgba(255,255,255,0.3)"}
      backgroundColor="rgba(0,0,0,0)"
    />
  );
};

export default Graph;
