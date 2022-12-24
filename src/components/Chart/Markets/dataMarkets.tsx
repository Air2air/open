import { v4 as uuid } from "uuid";
const saturation = "35%";

export const dataMarkets = [
  {
    id: uuid(),
    label: "HEALTHTECH",
    height: 20,
    value: "$400B",
    color: "#ffffff",
    backgroundColor: `hsl(350, ${saturation}, 30%)`,
    text: "Elevens supports Healthtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners.",
  },
  {
    id: uuid(),
    label: "MEDTECH",
    height: 30,
    value: "$500B",
    color: "#ffffff",
    backgroundColor: `hsl(370, ${saturation}, 35%)`,
    text: "Elevens supports Medtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners.",
  },
  {
    id: uuid(),
    label: "BIOTECH",
    height: 50,
    value: "$700B",
    color: "#ffffff",
    backgroundColor: `hsl(390, ${saturation}, 40%)`,
    text: "Elevens supports Biotech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners.",
  },
  {
    id: uuid(),
    label: "PHARMATECH",
    height: 100,
    value: "$1.2T",
    color: "#ffffff",
    backgroundColor: `hsl(410, ${saturation}, 45%)`,
    text: "Elevens supports Pharmatech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners.",
  },
];
