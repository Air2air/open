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
      path: "/",
      section: "Elevens",
      element: (<HomePage nextPath="/team" nextName="Elevens Team" section={undefined} />
      ),
      nodeSize: SiteNodeSize,
      nodeColor: SiteColorNode,
    },
    {
      id: "Elevens Team",
      path: "team",
      section: "Elevens",
      element: (
        <TeamPage section="Elevens" nextPath="/biotech" nextName="Bio" />
      ),
      nodeSize: LevelOneNodeSize,
      nodeColor: SiteColorNode,
    },
    /* --------------- Bio --------------- */
    {
      id: "Bio",
      path: "biotech",
      section: "Bio",
      nextPath: "biotech_preseed",
      element: (
        <BioTechPage
          section="Bio"
          nextPath="/biotech_preseed"
          nextName="Bio PreSeed Stage"
        />
      ),
      nodeSize: LevelOneNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "Bio PreSeed Stage",
      path: "biotech_preseed",
      section: "Bio",
      nextPath: "biotech_seed",
      element: (
        <BioTechPreSeedPage
          section="Bio"
          nextPath="/biotech_seed"
          nextName="Bio Seed Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "Bio Seed Stage",
      path: "biotech_seed",
      section: "Bio",
      nextPath: "biotech_series_a",
      element: (
        <BioTechSeedPage
          section="Bio"
          nextPath="/biotech_series_a"
          nextName="Bio Series A Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "Bio Series A",
      path: "biotech_series_a",
      section: "Bio",
      nextPath: "biotech_series_b",
      element: (
        <BioTechSeriesAPage
          section="Bio"
          nextPath="/biotech_series_b"
          nextName="Bio Series B Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "Bio Series B",
      path: "biotech_series_b",
      section: "Bio",
      nextPath: "biotech_mezzanine",
      element: (
        <BioTechSeriesBPage
          section="Bio"
          nextPath="/biotech_mezzanine"
          nextName="Bio Mezzanine Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "Bio Mezzanine",
      path: "biotech_mezzanine",
      section: "Bio",
      nextPath: "biotech_public",
      element: (
        <BioTechMezzaninePage
          section="Bio"
          nextPath="/biotech_public"
          nextName="Bio Public Company Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "Bio Public",
      path: "biotech_public",
      section: "Bio",
      nextPath: "biotech_contact",
      element: (
        <BioTechPublicPage
          section="Bio"
          nextPath="/biotech_contact"
          nextName="Bio Group Contact"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    {
      id: "Bio Contact",
      path: "biotech_contact",
      section: "Bio",
      nextPath: "biotech",
      element: (
        <BioTechContactPage
          section="Bio"
          nextPath="/biotech"
          nextName="Bio Expertise"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: BioColorNode,
    },
    /* --------------- Health --------------- */
    {
      id: "Health",
      path: "healthtech",
      section: "Health",
      nextPath: "healthtech_preseed",
      element: (
        <HealthTechPage
          section="Health"
          nextPath="/healthtech_preseed"
          nextName="Health PreSeed Stage"
        />
      ),
      nodeSize: LevelOneNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "Health PreSeed Stage",
      path: "healthtech_preseed",
      section: "Health",
      nextPath: "healthtech_seed",
      element: (
        <HealthTechPreSeedPage
          section="Health"
          nextPath="/healthtech_seed"
          nextName="Health Seed Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "Health Seed Stage",
      path: "healthtech_seed",
      section: "Health",
      nextPath: "healthtech_series_a",
      element: (
        <HealthTechSeedPage
          section="Health"
          nextPath="/healthtech_series_a"
          nextName="Health Series A Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "Health Series A",
      path: "healthtech_series_a",
      section: "Health",
      nextPath: "healthtech_series_b",
      element: (
        <HealthTechSeriesAPage
          section="Health"
          nextPath="/healthtech_series_b"
          nextName="Health Series B Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "Health Series B",
      path: "healthtech_series_b",
      section: "Health",
      nextPath: "healthtech_mezzanine",
      element: (
        <HealthTechSeriesBPage
          section="Health"
          nextPath="/healthtech_mezzanine"
          nextName="Health Mezzanine Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "Health Mezzanine",
      path: "healthtech_mezzanine",
      section: "Health",
      nextPath: "healthtech_public",
      element: (
        <HealthTechMezzaninePage
          section="Health"
          nextPath="/healthtech_public"
          nextName="Health Public Company Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "Health Public",
      path: "healthtech_public",
      section: "Health",
      nextPath: "healthtech_contact",
      element: (
        <HealthTechPublicPage
          section="Health"
          nextPath="/healthtech_contact"
          nextName="Health Group Contact"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    {
      id: "Health Contact",
      path: "healthtech_contact",
      section: "Health",
      nextPath: "healthtech",
      element: (
        <HealthTechContactPage
          section="Health"
          nextPath="/healthtech"
          nextName="Health Expertise"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: HealthColorNode,
    },
    /* --------------- Med --------------- */
    {
      id: "Med",
      path: "medtech",
      section: "Med",
      nextPath: "medtech_preseed",
      element: (
        <MedTechPage
          section="Med"
          nextPath="/medtech_preseed"
          nextName="Med PreSeed Stage"
        />
      ),
      nodeSize: LevelOneNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "Med PreSeed Stage",
      path: "medtech_preseed",
      section: "Med",
      nextPath: "medtech_seed",
      element: (
        <MedTechPreSeedPage
          section="Med"
          nextPath="/medtech_seed"
          nextName="Med Seed Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "Med Seed Stage",
      path: "medtech_seed",
      section: "Med",
      nextPath: "medtech_series_a",
      element: (
        <MedTechSeedPage
          section="Med"
          nextPath="/medtech_series_a"
          nextName="Med Series A Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "Med Series A",
      path: "medtech_series_a",
      section: "Med",
      nextPath: "medtech_series_b",
      element: (
        <MedTechSeriesAPage
          section="Med"
          nextPath="/medtech_series_b"
          nextName="Med Series B Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "Med Series B",
      path: "medtech_series_b",
      section: "Med",
      nextPath: "medtech_mezzanine",
      element: (
        <MedTechSeriesBPage
          section="Med"
          nextPath="/medtech_mezzanine"
          nextName="Med Mezzanine Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "Med Mezzanine",
      path: "medtech_mezzanine",
      section: "Med",
      nextPath: "medtech_public",
      element: (
        <MedTechMezzaninePage
          section="Med"
          nextPath="/medtech_public"
          nextName="Med Public Company Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "Med Public",
      path: "medtech_public",
      section: "Med",
      nextPath: "medtech_contact",
      element: (
        <MedTechPublicPage
          section="Med"
          nextPath="/medtech_contact"
          nextName="Med Group Contact"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    {
      id: "Med Contact",
      path: "medtech_contact",
      section: "Med",
      nextPath: "medtech",
      element: (
        <MedTechContactPage
          section="Med"
          nextPath="/medtech"
          nextName="Med Expertise"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: MedColorNode,
    },
    /* --------------- Pharma --------------- */
    {
      id: "Pharma",
      path: "pharmatech",
      section: "Pharma",
      nextPath: "pharmatech_preseed",
      element: (
        <PharmaTechPage
          section="Pharma"
          nextPath="/pharmatech_preseed"
          nextName="Pharma PreSeed Stage"
        />
      ),
      nodeSize: LevelOneNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "Pharma PreSeed Stage",
      path: "pharmatech_preseed",
      section: "Pharma",
      nextPath: "pharmatech_seed",
      element: (
        <PharmaTechPreSeedPage
          section="Pharma"
          nextPath="/pharmatech_seed"
          nextName="Pharma Seed Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "Pharma Seed Stage",
      path: "pharmatech_seed",
      section: "Pharma",
      nextPath: "pharmatech_series_a",
      element: (
        <PharmaTechSeedPage
          section="Pharma"
          nextPath="/pharmatech_series_a"
          nextName="Pharma Series A Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "Pharma Series A",
      path: "pharmatech_series_a",
      section: "Pharma",
      nextPath: "pharmatech_series_b",
      element: (
        <PharmaTechSeriesAPage
          section="Pharma"
          nextPath="/pharmatech_series_b"
          nextName="Pharma Series B Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "Pharma Series B",
      path: "pharmatech_series_b",
      section: "Pharma",
      nextPath: "pharmatech_mezzanine",
      element: (
        <PharmaTechSeriesBPage
          section="Pharma"
          nextPath="/pharmatech_mezzanine"
          nextName="Pharma Mezzanine Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "Pharma Mezzanine",
      path: "pharmatech_mezzanine",
      section: "Pharma",
      nextPath: "pharmatech_public",
      element: (
        <PharmaTechMezzaninePage
          section="Pharma"
          nextPath="/pharmatech_public"
          nextName="Pharma Public Company Stage"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "Pharma Public",
      path: "pharmatech_public",
      section: "Pharma",
      nextPath: "pharmatech_contact",
      element: (
        <PharmaTechPublicPage
          section="Pharma"
          nextPath="/pharmatech_contact"
          nextName="Pharma Group Contact"
        />
      ),
      nodeSize: LevelTwoNodeSize,
      nodeColor: PharmaColorNode,
    },
    {
      id: "Pharma Contact",
      path: "pharmatech_contact",
      section: "Pharma",
      nextPath: "pharmatech",
      element: (
        <PharmaTechContactPage
          section="Pharma"
          nextPath="/pharmatech"
          nextName="Pharma Expertise"
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

    /* --------------- Bio --------------- */
    {
      source: "Bio",
      target: "Home",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "Bio Contact",
      target: "Bio",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "Bio PreSeed Stage",
      target: "Bio",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "Bio Seed Stage",
      target: "Bio",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "Bio Series A",
      target: "Bio",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "Bio Series B",
      target: "Bio",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "Bio Mezzanine",
      target: "Bio",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    {
      source: "Bio Public",
      target: "Bio",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: BioColorLink,
    },
    /* --------------- Health --------------- */
    {
      source: "Health",
      target: "Home",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "Health Contact",
      target: "Health",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "Health PreSeed Stage",
      target: "Health",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "Health Seed Stage",
      target: "Health",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "Health Series A",
      target: "Health",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "Health Series B",
      target: "Health",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "Health Mezzanine",
      target: "Health",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    {
      source: "Health Public",
      target: "Health",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: HealthColorLink,
    },
    /* --------------- Med --------------- */
    {
      source: "Med",
      target: "Home",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "Med Contact",
      target: "Med",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "Med PreSeed Stage",
      target: "Med",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "Med Seed Stage",
      target: "Med",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "Med Series A",
      target: "Med",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "Med Series B",
      target: "Med",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "Med Mezzanine",
      target: "Med",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    {
      source: "Med Public",
      target: "Med",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: MedColorLink,
    },
    /* --------------- Pharma --------------- */
    {
      source: "Pharma",
      target: "Home",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "Pharma Contact",
      target: "Pharma",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "Pharma PreSeed Stage",
      target: "Pharma",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelOneLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "Pharma Seed Stage",
      target: "Pharma",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "Pharma Series A",
      target: "Pharma",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "Pharma Series B",
      target: "Pharma",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "Pharma Mezzanine",
      target: "Pharma",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: PharmaColorLink,
    },
    {
      source: "Pharma Public",
      target: "Pharma",
      particleCount: particleCount,
      particleSize: ParticleSize,
      linkSize: LevelTwoLinkSize,
      linkColor: PharmaColorLink,
    },
  ],
};
