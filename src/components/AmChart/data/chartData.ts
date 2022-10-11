import { HealthTech } from "./healthTech";
import { MedTech } from "./medTech";
import { PharmaTech } from "./pharmaTech";
import { BioTech } from "./bioTech";

export const chartData = [
  {
    name: "Elevens",
    value: 90,
    children: [BioTech, HealthTech, MedTech, PharmaTech],
  },
];