import { ForceGraph2D } from "react-force-graph";
import { useNavigate } from "react-router-dom";

// Sizes
const NodeSize = 10;
const SiteNodeSize = NodeSize;
const LevelOneNodeSize = NodeSize * 0.7;
const LevelTwoNodeSize = NodeSize * 0.4;
const LinkSize = 5;
const SiteLinkSize = LinkSize;
const LevelOneLinkSize = LinkSize * 0.8;
const LevelTwoLinkSize = LevelOneLinkSize * 0.8;

// Colors
const BioColorNode = "rgba(255, 123, 0, 1)";
const BioColorLink = "rgba(255, 123, 0, .3)";
const HealthColorNode = "rgba(71, 145, 214, 1)";
const HealthColorLink = "rgba(71, 145, 214, .3)";
const MedColorNode = "rgba(68, 173, 161, 1)";
const MedColorLink = "rgba(68, 173, 161, .3)";
const PharmaColorNode = "rgba(240, 53, 2, 1)";
const PharmaColorLink = "rgba(240, 53, 2, .3)";
const SiteColorNode = "rgba(171, 242, 255, 1)";
const SiteColorLink = "rgba(171, 242, 255, .3)";

// Other
const zoomLevel = 1.5
const particleCount = 8;
const ParticleSize = 4;

const data = {
  nodes: [
    {
      id: "About",
      link: "about",
      size: LevelTwoNodeSize,
      nodeColor: SiteColorNode,
    },
    {
      id: "Contact",
      link: "contact",
      size: LevelTwoNodeSize,
      nodeColor: SiteColorNode,
    },
    { id: "Home", link: "home", size: SiteNodeSize, nodeColor: SiteColorNode },
    {
      id: "Team",
      link: "team",
      size: LevelTwoNodeSize,
      nodeColor: SiteColorNode,
    },
    
    
    {
      id: "BioTech",
      link: "biotech",
      size: LevelOneNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech PreSeed",
      link: "biotech_preseed",
      size: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Seed",
      link: "biotech_seed",
      size: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Series A",
      link: "biotech_series_a",
      size: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Series B",
      link: "biotech_series_b",
      size: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Mezzanine",
      link: "biotech_mezzanine",
      size: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Public",
      link: "biotech_public",
      size: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },

    {
      id: "HealthTech",
      link: "healthtech",
      size: LevelOneNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech PreSeed",
      link: "healthtech_preseed",
      size: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Seed",
      link: "healthtech_seed",
      size: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Series A",
      link: "healthtech_series_a",
      size: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Series B",
      link: "healthtech_series_b",
      size: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Mezzanine",
      link: "healthtech_mezzanine",
      size: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Public",
      link: "healthtech_public",
      size: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },

    {
      id: "MedTech",
      link: "medtech",
      size: LevelOneNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech PreSeed",
      link: "medtech_preseed",
      size: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Seed",
      link: "medtech_seed",
      size: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Series A",
      link: "medtech_series_a",
      size: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Series B",
      link: "medtech_series_b",
      size: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Mezzanine",
      link: "medtech_mezzanine",
      size: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Public",
      link: "medtech_public",
      size: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },

    {
      id: "PharmaTech",
      link: "pharmatech",
      size: LevelOneNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech PreSeed",
      link: "pharmatech_preseed",
      size: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Seed",
      link: "pharmatech_seed",
      size: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Series A",
      link: "pharmatech_series_a",
      size: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Series B",
      link: "pharmatech_series_b",
      size: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Mezzanine",
      link: "pharmatech_mezzanine",
      size: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Public",
      link: "pharmatech_public",
      size: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
  ],

  links: [
    {
      source: "Home",
      target: "About",
      size: SiteLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: SiteColorLink,
    },

    {
      source: "Home",
      target: "Team",
      size: SiteLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: SiteColorLink,
    },

    {
      source: "Home",
      target: "Contact",
      size: SiteLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: SiteColorLink,
    },

    {
      source: "Home",
      target: "PharmaTech",
      size: LevelOneLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "BioTech",
      target: "Home",
      size: LevelOneLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech PreSeed",
      target: "BioTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech Seed",
      target: "BioTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech Series A",
      target: "BioTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech Series B",
      target: "BioTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech Mezzanine",
      target: "BioTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech Public",
      target: "BioTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: BioColorLink,
    },

    {
      source: "HealthTech",
      target: "Home",
      size: LevelOneLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech PreSeed",
      target: "HealthTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech Seed",
      target: "HealthTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech Series A",
      target: "HealthTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech Series B",
      target: "HealthTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech Mezzanine",
      target: "HealthTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech Public",
      target: "HealthTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: HealthColorLink,
    },

    {
      source: "MedTech",
      target: "Home",
      size: LevelOneLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech PreSeed",
      target: "MedTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech Seed",
      target: "MedTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech Series A",
      target: "MedTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech Series B",
      target: "MedTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech Mezzanine",
      target: "MedTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech Public",
      target: "MedTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: MedColorLink,
    },

    {
      source: "PharmaTech PreSeed",
      target: "PharmaTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech Seed",
      target: "PharmaTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech Series A",
      target: "PharmaTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech Series B",
      target: "PharmaTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech Mezzanine",
      target: "PharmaTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech Public",
      target: "PharmaTech",
      size: LevelTwoLinkSize,
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LinkSize,
      linkColor: PharmaColorLink,
    },
  ],
};

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
      height={window.innerHeight/1.8}
      enablePointerInteraction={true}
      nodeLabel="id"
      onNodeClick={handleNodeClick}
      nodeVal="size"
      linkCurvature="curvature" //{0.5}
      linkDirectionalParticles="particleCount"
      linkDirectionalParticleSpeed={(d) => 5 * 0.001}
      linkDirectionalParticleWidth="particleSize"
      linkWidth="linkSize"
      nodeColor="nodeColor"
      linkColor="linkColor"
      backgroundColor="rgba(0,0,0,0)"
      minZoom={zoomLevel}
      maxZoom={zoomLevel}
      cooldownTime={9000}
      cooldownTicks={1500}
      // cooldownTime={Infinity}
      d3AlphaDecay={0.01}
      d3VelocityDecay={0.84}
    />
  );
};

export default Graph;
