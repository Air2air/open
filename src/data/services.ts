import { firstChildNodeSize, secondChildNodeSize } from "./navData";
const linkPrefix = "services_";

export const Services = {
  name: "Services",
  value: firstChildNodeSize,
  children: [
    {
      name: "Evaluation",
      value: secondChildNodeSize,
      link: linkPrefix + "health_tech"
    },
    {
      name: "Research",
      value: secondChildNodeSize,
      link: linkPrefix + "med_tech"
    },
    {
      name: "Guidance",
      value: secondChildNodeSize,
      link: linkPrefix + "bio_tech"
    },
  ],
};
