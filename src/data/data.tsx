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

export const data = {
  nodes: [
    {
      id: "About",
      path: "about",
      section: "Elevens",
      element: (
        <AboutPage section="Elevens" nextPath="/team" nextName="Elevens Team" />
      )
    },
    {
      id: "Home",
      path: "/",
      section: "Elevens",
      element: (
        <HomePage
          nextPath="/team"
          nextName="Elevens Team"
          section={undefined}
        />
      )
    },
    {
      id: "Elevens Team",
      path: "team",
      section: "Elevens",
      element: (
        <TeamPage section="Elevens" nextPath="/biotech" nextName="Bio" />
      ),
    },
    /* --------------- Bio --------------- */
    {
      id: "Bio",
      path: "biotech",
      section: "Bio",
      element: (
        <BioTechPage
          section="Bio"
          nextPath="/biotech_preseed"
          nextName="Bio PreSeed Stage"
        />
      )
    },
    {
      id: "Bio PreSeed Stage",
      path: "biotech_preseed",
      section: "Bio",
      element: (
        <BioTechPreSeedPage
          section="Bio"
          nextPath="/biotech_seed"
          nextName="Bio Seed Stage"
        />
      )
    },
    {
      id: "Bio Seed Stage",
      path: "biotech_seed",
      section: "Bio",
      element: (
        <BioTechSeedPage
          section="Bio"
          nextPath="/biotech_series_a"
          nextName="Bio Series A Stage"
        />
      )
    },
    {
      id: "Bio Series A",
      path: "biotech_series_a",
      section: "Bio",
      element: (
        <BioTechSeriesAPage
          section="Bio"
          nextPath="/biotech_series_b"
          nextName="Bio Series B Stage"
        />
      )
    },
    {
      id: "Bio Series B",
      path: "biotech_series_b",
      section: "Bio",
      element: (
        <BioTechSeriesBPage
          section="Bio"
          nextPath="/biotech_mezzanine"
          nextName="Bio Mezzanine Stage"
        />
      )
    },
    {
      id: "Bio Mezzanine",
      path: "biotech_mezzanine",
      section: "Bio",
      element: (
        <BioTechMezzaninePage
          section="Bio"
          nextPath="/biotech_public"
          nextName="Bio Public Company Stage"
        />
      )
    },
    {
      id: "Bio Public",
      path: "biotech_public",
      section: "Bio",
      element: (
        <BioTechPublicPage
          section="Bio"
          nextPath="/biotech_contact"
          nextName="Bio Group Contact"
        />
      )
    },
    {
      id: "Bio Contact",
      path: "biotech_contact",
      section: "Bio",
      element: (
        <BioTechContactPage
          section="Bio"
          nextPath="/healthtech"
          nextName="Health Tech"
        />
      ),
    },
    /* --------------- Health --------------- */
    {
      id: "Health",
      path: "healthtech",
      section: "Health",
      element: (
        <HealthTechPage
          section="Health"
          nextPath="/healthtech_preseed"
          nextName="Health PreSeed Stage"
        />
      )
    },
    {
      id: "Health PreSeed Stage",
      path: "healthtech_preseed",
      section: "Health",
      element: (
        <HealthTechPreSeedPage
          section="Health"
          nextPath="/healthtech_seed"
          nextName="Health Seed Stage"
        />
      )
    },
    {
      id: "Health Seed Stage",
      path: "healthtech_seed",
      section: "Health",
      element: (
        <HealthTechSeedPage
          section="Health"
          nextPath="/healthtech_series_a"
          nextName="Health Series A Stage"
        />
      )
    },
    {
      id: "Health Series A",
      path: "healthtech_series_a",
      section: "Health",
      element: (
        <HealthTechSeriesAPage
          section="Health"
          nextPath="/healthtech_series_b"
          nextName="Health Series B Stage"
        />
      )
    },
    {
      id: "Health Series B",
      path: "healthtech_series_b",
      section: "Health",
      element: (
        <HealthTechSeriesBPage
          section="Health"
          nextPath="/healthtech_mezzanine"
          nextName="Health Mezzanine Stage"
        />
      )
    },
    {
      id: "Health Mezzanine",
      path: "healthtech_mezzanine",
      section: "Health",
      element: (
        <HealthTechMezzaninePage
          section="Health"
          nextPath="/healthtech_public"
          nextName="Health Public Company Stage"
        />
      )
    },
    {
      id: "Health Public",
      path: "healthtech_public",
      section: "Health",
      element: (
        <HealthTechPublicPage
          section="Health"
          nextPath="/healthtech_contact"
          nextName="Health Group Contact"
        />
      )
    },
    {
      id: "Health Contact",
      path: "healthtech_contact",
      section: "Health",
      element: (
        <HealthTechContactPage
          section="Health"
          nextPath="/medtech"
          nextName="MedTech Expertise"
        />
      ),
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
      )
    },
    {
      id: "Med PreSeed Stage",
      path: "medtech_preseed",
      section: "Med",
      element: (
        <MedTechPreSeedPage
          section="Med"
          nextPath="/medtech_seed"
          nextName="Med Seed Stage"
        />
      )
    },
    {
      id: "Med Seed Stage",
      path: "medtech_seed",
      section: "Med",
      element: (
        <MedTechSeedPage
          section="Med"
          nextPath="/medtech_series_a"
          nextName="Med Series A Stage"
        />
      )
    },
    {
      id: "Med Series A",
      path: "medtech_series_a",
      section: "Med",
      element: (
        <MedTechSeriesAPage
          section="Med"
          nextPath="/medtech_series_b"
          nextName="Med Series B Stage"
        />
      )
    },
    {
      id: "Med Series B",
      path: "medtech_series_b",
      section: "Med",
      element: (
        <MedTechSeriesBPage
          section="Med"
          nextPath="/medtech_mezzanine"
          nextName="Med Mezzanine Stage"
        />
      )
    },
    {
      id: "Med Mezzanine",
      path: "medtech_mezzanine",
      section: "Med",
      element: (
        <MedTechMezzaninePage
          section="Med"
          nextPath="/medtech_public"
          nextName="Med Public Company Stage"
        />
      )
    },
    {
      id: "Med Public",
      path: "medtech_public",
      section: "Med",
      element: (
        <MedTechPublicPage
          section="Med"
          nextPath="/medtech_contact"
          nextName="Med Group Contact"
        />
      )
    },
    {
      id: "Med Contact",
      path: "medtech_contact",
      section: "Med",
      element: (
        <MedTechContactPage
          section="Med"
          nextPath="/pharmatech"
          nextName="Pharma Tech Expertise"
        />
      ),
    },
    /* --------------- Pharma --------------- */
    {
      id: "Pharma",
      path: "pharmatech",
      section: "Pharma",
      element: (
        <PharmaTechPage
          section="Pharma"
          nextPath="/pharmatech_preseed"
          nextName="Pharma PreSeed Stage"
        />
      )
    },
    {
      id: "Pharma PreSeed Stage",
      path: "pharmatech_preseed",
      section: "Pharma",
      element: (
        <PharmaTechPreSeedPage
          section="Pharma"
          nextPath="/pharmatech_seed"
          nextName="Pharma Seed Stage"
        />
      )
    },
    {
      id: "Pharma Seed Stage",
      path: "pharmatech_seed",
      section: "Pharma",
      element: (
        <PharmaTechSeedPage
          section="Pharma"
          nextPath="/pharmatech_series_a"
          nextName="Pharma Series A Stage"
        />
      )
    },
    {
      id: "Pharma Series A",
      path: "pharmatech_series_a",
      section: "Pharma",
      element: (
        <PharmaTechSeriesAPage
          section="Pharma"
          nextPath="/pharmatech_series_b"
          nextName="Pharma Series B Stage"
        />
      )
    },
    {
      id: "Pharma Series B",
      path: "pharmatech_series_b",
      section: "Pharma",
      element: (
        <PharmaTechSeriesBPage
          section="Pharma"
          nextPath="/pharmatech_mezzanine"
          nextName="Pharma Mezzanine Stage"
        />
      )
    },
    {
      id: "Pharma Mezzanine",
      path: "pharmatech_mezzanine",
      section: "Pharma",
      element: (
        <PharmaTechMezzaninePage
          section="Pharma"
          nextPath="/pharmatech_public"
          nextName="Pharma Public Company Stage"
        />
      )
    },
    {
      id: "Pharma Public",
      path: "pharmatech_public",
      section: "Pharma",
      element: (
        <PharmaTechPublicPage
          section="Pharma"
          nextPath="/pharmatech_contact"
          nextName="Pharma Group Contact"
        />
      )
    },
    {
      id: "Pharma Contact",
      path: "pharmatech_contact",
      section: "Pharma",
      element: (
        <PharmaTechContactPage
          section="Pharma"
          nextPath="/pharmatech"
          nextName="Pharma Expertise"
        />
      ),
    },
  ],
};
