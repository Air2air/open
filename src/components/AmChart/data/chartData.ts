import { BioTech } from "./bioTech";
import { HealthTech } from "./healthTech";
import { MedTech } from "./medTech";
import { PharmaTech } from "./pharmaTech";
import { NodeBaseSize } from "../config";

export const chartData = [
  {
    name: "Elevens",
    value: NodeBaseSize,
    children: [BioTech, HealthTech, MedTech, PharmaTech],
  },
];
