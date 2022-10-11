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
      section: "Elevens",
      element: (
        <AboutPage section="Elevens" nextPath="/team" nextName="Elevens Team" />
      ),
      nodeSize: LevelOneNodeSize,
      nodeColor: SiteColorNode,
    },
    {
      id: "Home",
      path: "home",
      section: "Elevens",
      element: <HomePage />,
      nodeSize: SiteNodeSize,
      nodeColor: SiteColorNode,
    },
    {
      id: "Elevens Team",
      path: "team",
      section: "Elevens",
      element: (
        <TeamPage section="Elevens" nextPath="/biotech" nextName="BioTech" />
      ),
      nodeSize: LevelOneNodeSize,
      nodeColor: SiteColorNode,
    },
    /* --------------- BioTech --------------- */
    {
      id: "BioTech",
      path: "biotech",
      section: "BioTech",
      nextPath: "biotech_preseed",
      element: (
        <BioTechPage
          section="BioTech"
          nextPath="/biotech_preseed"
          nextName="BioTech PreSeed Stage"
        />
      ),
      nodeSize: LevelOneNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech PreSeed Stage",
      path: "biotech_preseed",
      section: "BioTech",
      nextPath: "biotech_seed",
      element: (
        <BioTechPreSeedPage
          section="BioTech"
          nextPath="/biotech_seed"
          nextName="BioTech Seed Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Seed Stage",
      path: "biotech_seed",
      section: "BioTech",
      nextPath: "biotech_series_a",
      element: (
        <BioTechSeedPage
          section="BioTech"
          nextPath="/biotech_series_a"
          nextName="BioTech Series A Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Series A",
      path: "biotech_series_a",
      section: "BioTech",
      nextPath: "biotech_series_b",
      element: (
        <BioTechSeriesAPage
          section="BioTech"
          nextPath="/biotech_series_b"
          nextName="BioTech Series B Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Series B",
      path: "biotech_series_b",
      section: "BioTech",
      nextPath: "biotech_mezzanine",
      element: (
        <BioTechSeriesBPage
          section="BioTech"
          nextPath="/biotech_mezzanine"
          nextName="BioTech Mezzanine Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Mezzanine",
      path: "biotech_mezzanine",
      section: "BioTech",
      nextPath: "biotech_public",
      element: (
        <BioTechMezzaninePage
          section="BioTech"
          nextPath="/biotech_public"
          nextName="BioTech Public Company Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Public",
      path: "biotech_public",
      section: "BioTech",
      nextPath: "biotech_contact",
      element: (
        <BioTechPublicPage
          section="BioTech"
          nextPath="/biotech_contact"
          nextName="BioTech Group Contact"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "BioTech Contact",
      path: "biotech_contact",
      section: "BioTech",
      nextPath: "biotech",
      element: (
        <BioTechContactPage
          section="BioTech"
          nextPath="/biotech"
          nextName="BioTech Expertise"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    /* --------------- HealthTech --------------- */
    {
      id: "HealthTech",
      path: "healthtech",
      section: "HeathTech",
      nextPath: "healthtech_preseed",
      element: (
        <HealthTechPage
          section="HealthTech"
          nextPath="/healthtech_preseed"
          nextName="HealthTech PreSeed Stage"
        />
      ),
      nodeSize: LevelOneNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech PreSeed Stage",
      path: "healthtech_preseed",
      section: "HeathTech",
      nextPath: "healthtech_seed",
      element: (
        <HealthTechPreSeedPage
          section="HealthTech"
          nextPath="/healthtech_seed"
          nextName="HealthTech Seed Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Seed Stage",
      path: "healthtech_seed",
      section: "HeathTech",
      nextPath: "healthtech_series_a",
      element: (
        <HealthTechSeedPage
          section="HealthTech"
          nextPath="/healthtech_series_a"
          nextName="HealthTech Series A Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Series A",
      path: "healthtech_series_a",
      section: "HeathTech",
      nextPath: "healthtech_series_b",
      element: (
        <HealthTechSeriesAPage
          section="HealthTech"
          nextPath="/healthtech_series_b"
          nextName="HealthTech Series B Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Series B",
      path: "healthtech_series_b",
      section: "HeathTech",
      nextPath: "healthtech_mezzanine",
      element: (
        <HealthTechSeriesBPage
          section="HealthTech"
          nextPath="/healthtech_mezzanine"
          nextName="HealthTech Mezzanine Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Mezzanine",
      path: "healthtech_mezzanine",
      section: "HeathTech",
      nextPath: "healthtech_public",
      element: (
        <HealthTechMezzaninePage
          section="HealthTech"
          nextPath="/healthtech_public"
          nextName="HealthTech Public Company Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Public",
      path: "healthtech_public",
      section: "HeathTech",
      nextPath: "healthtech_contact",
      element: (
        <HealthTechPublicPage
          section="HealthTech"
          nextPath="/healthtech_contact"
          nextName="HealthTech Group Contact"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "HealthTech Contact",
      path: "healthtech_contact",
      section: "HeathTech",
      nextPath: "healthtech",
      element: (
        <HealthTechContactPage
          section="HealthTech"
          nextPath="/healthtech"
          nextName="HealthTech Expertise"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    /* --------------- MedTech --------------- */
    {
      id: "MedTech",
      path: "medtech",
      section: "MedTech",
      nextPath: "medtech_preseed",
      element: (
        <MedTechPage
          section="MedTech"
          nextPath="/medtech_preseed"
          nextName="MedTech PreSeed Stage"
        />
      ),
      nodeSize: LevelOneNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech PreSeed Stage",
      path: "medtech_preseed",
      section: "MedTech",
      nextPath: "medtech_seed",
      element: (
        <MedTechPreSeedPage
          section="MedTech"
          nextPath="/medtech_seed"
          nextName="MedTech Seed Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Seed Stage",
      path: "medtech_seed",
      section: "MedTech",
      nextPath: "medtech_series_a",
      element: (
        <MedTechSeedPage
          section="MedTech"
          nextPath="/medtech_series_a"
          nextName="MedTech Series A Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Series A",
      path: "medtech_series_a",
      section: "MedTech",
      nextPath: "medtech_series_b",
      element: (
        <MedTechSeriesAPage
          section="MedTech"
          nextPath="/medtech_series_b"
          nextName="MedTech Series B Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Series B",
      path: "medtech_series_b",
      section: "MedTech",
      nextPath: "medtech_mezzanine",
      element: (
        <MedTechSeriesBPage
          section="MedTech"
          nextPath="/medtech_mezzanine"
          nextName="MedTech Mezzanine Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Mezzanine",
      path: "medtech_mezzanine",
      section: "MedTech",
      nextPath: "medtech_public",
      element: (
        <MedTechMezzaninePage
          section="MedTech"
          nextPath="/medtech_public"
          nextName="MedTech Public Company Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Public",
      path: "medtech_public",
      section: "MedTech",
      nextPath: "medtech_contact",
      element: (
        <MedTechPublicPage
          section="MedTech"
          nextPath="/medtech_contact"
          nextName="MedTech Group Contact"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "MedTech Contact",
      path: "medtech_contact",
      section: "MedTech",
      nextPath: "medtech",
      element: (
        <MedTechContactPage
          section="MedTech"
          nextPath="/medtech"
          nextName="MedTech Expertise"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    /* --------------- PharmaTech --------------- */
    {
      id: "PharmaTech",
      path: "pharmatech",
      section: "PharmaTech",
      nextPath: "pharmatech_preseed",
      element: (
        <PharmaTechPage
          section="PharmaTech"
          nextPath="/pharmatech_preseed"
          nextName="PharmaTech PreSeed Stage"
        />
      ),
      nodeSize: LevelOneNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech PreSeed Stage",
      path: "pharmatech_preseed",
      section: "PharmaTech",
      nextPath: "pharmatech_seed",
      element: (
        <PharmaTechPreSeedPage
          section="PharmaTech"
          nextPath="/pharmatech_seed"
          nextName="PharmaTech Seed Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Seed Stage",
      path: "pharmatech_seed",
      section: "PharmaTech",
      nextPath: "pharmatech_series_a",
      element: (
        <PharmaTechSeedPage
          section="PharmaTech"
          nextPath="/pharmatech_series_a"
          nextName="PharmaTech Series A Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Series A",
      path: "pharmatech_series_a",
      section: "PharmaTech",
      nextPath: "pharmatech_series_b",
      element: (
        <PharmaTechSeriesAPage
          section="PharmaTech"
          nextPath="/pharmatech_series_b"
          nextName="PharmaTech Series B Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Series B",
      path: "pharmatech_series_b",
      section: "PharmaTech",
      nextPath: "pharmatech_mezzanine",
      element: (
        <PharmaTechSeriesBPage
          section="PharmaTech"
          nextPath="/pharmatech_mezzanine"
          nextName="PharmaTech Mezzanine Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Mezzanine",
      path: "pharmatech_mezzanine",
      section: "PharmaTech",
      nextPath: "pharmatech_public",
      element: (
        <PharmaTechMezzaninePage
          section="PharmaTech"
          nextPath="/pharmatech_public"
          nextName="PharmaTech Public Company Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Public",
      path: "pharmatech_public",
      section: "PharmaTech",
      nextPath: "pharmatech_contact",
      element: (
        <PharmaTechPublicPage
          section="PharmaTech"
          nextPath="/pharmatech_contact"
          nextName="PharmaTech Group Contact"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "PharmaTech Contact",
      path: "pharmatech_contact",
      section: "PharmaTech",
      nextPath: "pharmatech",
      element: (
        <PharmaTechContactPage
          section="PharmaTech"
          nextPath="/pharmatech"
          nextName="PharmaTech Expertise"
        />
      ),
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
      target: "Elevens Team",
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
      source: "BioTech PreSeed Stage",
      target: "BioTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "BioTech Seed Stage",
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
      source: "HealthTech PreSeed Stage",
      target: "HealthTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "HealthTech Seed Stage",
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
      source: "MedTech PreSeed Stage",
      target: "MedTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "MedTech Seed Stage",
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
      source: "PharmaTech PreSeed Stage",
      target: "PharmaTech",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "PharmaTech Seed Stage",
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
