import { v4 as uuid } from "uuid";


const saturation = '35%';

export const dataMarkets = [
  {
    id: uuid(),
    title: "HEALTHTECH",
    height: 20,
    value: "$400B",
    backgroundColor: `hsl(350, ${saturation}, 40%)`,
    text: "Elevens supports Healthtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners.",
  },
  {
    id: uuid(),
    title: "MEDTECH",
    height: 30,
    value: "$500B",
    backgroundColor: `hsl(370, ${saturation}, 45%)`,
    text: "Elevens supports Medtech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners.",
  },
  {
    id: uuid(),
    title: "BIOTECH",
    height: 50,
    value: "$700B",
    backgroundColor: `hsl(390, ${saturation}, 50%)`,
    text: "Elevens supports Biotech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners.",
  },
  {
    id: uuid(),
    title: "PHARMATECH",
    height: 100,
    value: "$1.2T",
    backgroundColor: `hsl(410, ${saturation}, 55%)`,
    text: "Elevens supports Pharmatech ventures from early private stages through initial public offering (IPO), and assists public companies to identify innovative private sector partners.",
  },
];
