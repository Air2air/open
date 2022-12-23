import { v4 as uuid } from "uuid";

const saturation = "28%";

export const dataVision = [
  {
    id: uuid(),
    label: "Pre-Seed",
    backgroundColor: `hsl(200, ${saturation}, 30%)`,
  },
  {
    id: uuid(),
    label: "Seed",
    backgroundColor: `hsl(195, ${saturation}, 35%)`,
  },
  {
    id: uuid(),
    label: "Series A",
    backgroundColor: `hsl(190, ${saturation}, 40%)`,
  },
  {
    id: uuid(),
    label: "Series B",
    backgroundColor: `hsl(185, ${saturation}, 45%)`,
  },
  {
    id: uuid(),
    label: "Series C",
    backgroundColor: `hsl(180, ${saturation}, 50%)`,
  },
  {
    id: uuid(),
    label: "Mezzanine",
    backgroundColor: `hsl(175, ${saturation}, 55%)`,
  },
  {
    id: uuid(),
    label: "Public",
    backgroundColor: `hsl(170, ${saturation}, 60%)`,
  },
];
