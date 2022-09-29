import { firstChildNodeSize, secondChildNodeSize } from "./navData";
const linkPrefix = "stage_";

export const Stage = {
  name: "Stage",
  value: firstChildNodeSize,
  children: [
    {
      name: "Pre-Seed",
      value: secondChildNodeSize,
      link: linkPrefix + "pre_seed"
    },
    {
      name: "Seed",
      value: secondChildNodeSize,
       link: linkPrefix + "seed"
    },
    {
      name: "Series A",
      value: secondChildNodeSize,
       link: linkPrefix + "series_a"
    },
    {
      name: "Series B",
      value: secondChildNodeSize,
      link: linkPrefix + "series_b"
    },
    {
      name: "Series C",
      value: secondChildNodeSize,
      link: linkPrefix + "series_c"
    },
    {
      name: "Mezzanine",
      value: secondChildNodeSize,
       link: linkPrefix + "mezzanine"
    },
    {
      name: "Public",
      value: secondChildNodeSize,
       link: linkPrefix + "public"
    },
  ],
};
