import { firstChildNodeSize, secondChildNodeSize } from "./navData";
const linkPrefix = "industries_";

export const Industries = {
  name: "Industries",
  value: firstChildNodeSize,
  children: [
    {
      name: "HealthTech",
      value: secondChildNodeSize,
      link: linkPrefix + "health_tech"
    },
    {
      name: "MedTech",
      value: secondChildNodeSize,
      link: linkPrefix + "med_tech"
    },
    {
      name: "BioTech",
      value: secondChildNodeSize,
      link: linkPrefix + "bio_tech"
    },
    {
      name: "PharmaTech",
      value: secondChildNodeSize,
      link: linkPrefix + "pharma_tech"
    },
  ],
};
