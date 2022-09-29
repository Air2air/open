import { Consultants } from "./consultants";
import { Industries } from "./industries";
import { Contact } from "./contact";
import { Services } from "./services";
import { Stage } from "./stage";

export const parentNodeSize = 90;
export const firstChildNodeSize = 80;
export const secondChildNodeSize = 80;

export const navData = [
  {
    name: "Elevens",
    value: parentNodeSize,
    children: [Industries, Stage, Contact, Services],
  },
];
