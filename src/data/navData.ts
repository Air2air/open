import { HealthTech } from "./healthTech";
import { MedTech } from "./medTech";
import { PharmaTech } from "./pharmaTech";
import { BioTech } from "./bioTech";

import { parentNodeSize } from "../components/AmCharts/config";

export const navData = [
  {
    name: "Elevens",
    value: parentNodeSize,
    children: [BioTech, HealthTech, MedTech, PharmaTech],
  },
];
