import AboutPage from "../pages/about";
import BioTechPage from "../pages/BioTech/biotech";
import BioTechContactPage from "../pages/BioTech/biotech_contact";
import BioTechMezzaninePage from "../pages/BioTech/biotech_mezzanine";
import BioTechPreSeedPage from "../pages/BioTech/biotech_preseed";
import BioTechPublicPage from "../pages/BioTech/biotech_public";
import BioTechSeedPage from "../pages/BioTech/biotech_seed";
import BioTechSeriesAPage from "../pages/BioTech/biotech_series_a";
import BioTechSeriesBPage from "../pages/BioTech/biotech_series_b";
import HealthTechPage from "../pages/HealthTech/healthtech";
import HealthTechMezzaninePage from "../pages/HealthTech/healthtech_mezzanine";
import HealthTechPreSeedPage from "../pages/HealthTech/healthtech_preseed";
import HealthTechPublicPage from "../pages/HealthTech/healthtech_public";
import HealthTechSeedPage from "../pages/HealthTech/healthtech_seed";
import HealthTechSeriesAPage from "../pages/HealthTech/healthtech_series_a";
import HealthTechSeriesBPage from "../pages/HealthTech/healthtech_series_b";
import HealthTechContactPage from "../pages/HealthTech/healthtech_contact";
import HomePage from "../pages/home";
import MedTechPage from "../pages/MedTech/medtech";
import MedTechContactPage from "../pages/MedTech/medtech_contact";
import MedTechMezzaninePage from "../pages/MedTech/medtech_mezzanine";
import MedTechPreSeedPage from "../pages/MedTech/medtech_preseed";
import MedTechPublicPage from "../pages/MedTech/medtech_public";
import MedTechSeedPage from "../pages/MedTech/medtech_seed";
import MedTechSeriesAPage from "../pages/MedTech/medtech_series_a";
import MedTechSeriesBPage from "../pages/MedTech/medtech_series_b";
import PharmaTechPage from "../pages/PharmaTech/pharmatech";
import PharmaTechContactPage from "../pages/PharmaTech/pharmatech_contact";
import PharmaTechMezzaninePage from "../pages/PharmaTech/pharmatech_mezzanine";
import PharmaTechPreSeedPage from "../pages/PharmaTech/pharmatech_preseed";
import PharmaTechPublicPage from "../pages/PharmaTech/pharmatech_public";
import PharmaTechSeedPage from "../pages/PharmaTech/pharmatech_seed";
import PharmaTechSeriesAPage from "../pages/PharmaTech/pharmatech_series_a";
import PharmaTechSeriesBPage from "../pages/PharmaTech/pharmatech_series_b";
import TeamPage from "../pages/team";
import {
  LevelTwoNodeSize,
  SiteColorNode,
  SiteNodeSize,
  LevelOneNodeSize,
  BioColorNode,
  HealthColorNode,
  MedColorNode,
  PharmaColorNode,
  SiteLinkSize,
  particleCount,
  ParticleSize,
  SiteColorLink,
  LevelOneLinkSize,
  PharmaColorLink,
  BioColorLink,
  LevelTwoLinkSize,
  HealthColorLink,
  MedColorLink,
} from "../components/Graph/config";

export const data = {
  nodes: [
    {
      id: "About",
      path: "about",
      element: <AboutPage />,
      nodeSize: LevelOneNodeSize,
      nodeColor: SiteColorNode,
    },
    {
      id: "Home",
      path: "home",
      element: <HomePage />,
      nodeSize: SiteNodeSize,
      nodeColor: SiteColorNode,
    },
    {
      id: "Team",
      path: "team",
      element: <TeamPage />,
      nodeSize: LevelOneNodeSize,
      nodeColor: SiteColorNode,
    },
    /* --------------- BioTech --------------- */
    {
      id: "BioTech",
      path: "biotech",
      element: <BioTechPage />,
      nodeSize: LevelOneNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Contact",
      path: "biotech_contact",
      element: <BioTechContactPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech PreSeed",
      path: "biotech_preseed",
      element: <BioTechPreSeedPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Seed",
      path: "biotech_seed",
      element: <BioTechSeedPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Series A",
      path: "biotech_series_a",
      element: <BioTechSeriesAPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Series B",
      path: "biotech_series_b",
      element: <BioTechSeriesBPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Mezzanine",
      path: "biotech_mezzanine",
      element: <BioTechMezzaninePage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Public",
      path: "biotech_public",
      element: <BioTechPublicPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    /* --------------- HealthTech --------------- */
    {
      id: "HealthTech",
      path: "healthtech",
      element: <HealthTechPage />,
      nodeSize: LevelOneNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Contact",
      path: "healthtech_contact",
      element: <HealthTechContactPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech PreSeed",
      path: "healthtech_preseed",
      element: <HealthTechPreSeedPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Seed",
      path: "healthtech_seed",
      element: <HealthTechSeedPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Series A",
      path: "healthtech_series_a",
      element: <HealthTechSeriesAPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Series B",
      path: "healthtech_series_b",
      element: <HealthTechSeriesBPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Mezzanine",
      path: "healthtech_mezzanine",
      element: <HealthTechMezzaninePage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Public",
      path: "healthtech_public",
      element: <HealthTechPublicPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    /* --------------- MedTech --------------- */
    {
      id: "MedTech",
      path: "medtech",
      element: <MedTechPage />,
      nodeSize: LevelOneNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Contact",
      path: "medtech_contact",
      element: <MedTechContactPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech PreSeed",
      path: "medtech_preseed",
      element: <MedTechPreSeedPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Seed",
      path: "medtech_seed",
      element: <MedTechSeedPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Series A",
      path: "medtech_series_a",
      element: <MedTechSeriesAPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Series B",
      path: "medtech_series_b",
      element: <MedTechSeriesBPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Mezzanine",
      path: "medtech_mezzanine",
      element: <MedTechMezzaninePage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Public",
      path: "medtech_public",
      element: <MedTechPublicPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    /* --------------- PharmaTech --------------- */
    {
      id: "PharmaTech",
      path: "pharmatech",
      element: <PharmaTechPage />,
      nodeSize: LevelOneNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Contact",
      path: "pharmatech_contact",
      element: <PharmaTechContactPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech PreSeed",
      path: "pharmatech_preseed",
      element: <PharmaTechPreSeedPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Seed",
      path: "pharmatech_seed",
      element: <PharmaTechSeedPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Series A",
      path: "pharmatech_series_a",
      element: <PharmaTechSeriesAPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Series B",
      path: "pharmatech_series_b",
      element: <PharmaTechSeriesBPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Mezzanine",
      path: "pharmatech_mezzanine",
      element: <PharmaTechMezzaninePage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Public",
      path: "pharmatech_public",
      element: <PharmaTechPublicPage />,
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
  ],

  /* --------------- Links --------------- */

  links: [
    {
      source: "Home",
      target: "About",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: SiteLinkSize,
      linkColor: SiteColorLink,
    },
    {
      source: "Home",
      target: "Team",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: SiteLinkSize,
      linkColor: SiteColorLink,
    },

    /* --------------- BioTech --------------- */
    {
      source: "BioTech",
      target: "Home",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech Contact",
      target: "BioTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech PreSeed",
      target: "BioTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech Seed",
      target: "BioTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech Series A",
      target: "BioTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech Series B",
      target: "BioTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech Mezzanine",
      target: "BioTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech Public",
      target: "BioTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    /* --------------- HealthTech --------------- */
    {
      source: "HealthTech",
      target: "Home",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech Contact",
      target: "HealthTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech PreSeed",
      target: "HealthTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech Seed",
      target: "HealthTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech Series A",
      target: "HealthTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech Series B",
      target: "HealthTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech Mezzanine",
      target: "HealthTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech Public",
      target: "HealthTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    /* --------------- MedTech --------------- */
    {
      source: "MedTech",
      target: "Home",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech Contact",
      target: "MedTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech PreSeed",
      target: "MedTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech Seed",
      target: "MedTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech Series A",
      target: "MedTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech Series B",
      target: "MedTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech Mezzanine",
      target: "MedTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech Public",
      target: "MedTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    /* --------------- PharmaTech --------------- */
    {
      source: "PharmaTech",
      target: "Home",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech Contact",
      target: "PharmaTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech PreSeed",
      target: "PharmaTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech Seed",
      target: "PharmaTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech Series A",
      target: "PharmaTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech Series B",
      target: "PharmaTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech Mezzanine",
      target: "PharmaTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech Public",
      target: "PharmaTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: PharmaColorLink,
    },
  ],
};
