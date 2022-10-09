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
    { source: "Home", target: "About", value: 3, particleColor: 'white' },
    { source: "BioTech", target: "Home", value: 3 },
    { source: "HealthTech", target: "Home", value: 3 },
    { source: "MedTech", target: "Home", value: 5 },
    { source: "PharmaTech", target: "About", value: 5 },
    { source: "About", target: "Home", value: 5, flow1: 5, flow2: 10 },
  ],
};



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
      nodeRelSize={8}
      linkCurvature="curvature" //linkCurvature={0.5}
      linkDirectionalParticles='value'
      linkDirectionalParticleSpeed={(d) => 5 * 0.001}
      linkDirectionalParticleWidth={3}

      linkWidth={9}
      cooldownTime={55000}
      cooldownTicks={10000}
      nodeColor={(_) => "rgba(255,255,255,1)"}
      linkColor={(_) => "rgba(255,255,255,0.3)"}
      backgroundColor="rgba(0,0,0,0)"
    />
  );
};

export default Graph;
function rgba(arg0: number, arg1: number, arg2: number, arg3: number) {
    throw new Error("Function not implemented.");
}

