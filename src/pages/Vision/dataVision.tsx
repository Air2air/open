import { v4 as uuid } from "uuid";

const saturation = "25%";

export const dataVision = [
  {
    id: uuid(),
    title: "PRE-SEED",
    text: "<ul><li>Prototype-to-market fit adjustment</li><li>Human Assets and capabilities needs assessment</li><li>Market sizing</li><li>Competitive landscape assessment</li><li>Funding assessment to get to Seed</li><li>Seed funding introductions</li></ul>",
    backgroundColor: `hsl(320, ${saturation}, 30%)`,
    height: 100,
  },
  {
    id: uuid(),
    title: "SEED",
    text: "<ul><li>Product-to-market fit adjustment</li><li>Market focus</li><li>Revenue modeling</li><li>IP portfolio management</li><li>Product development</li><li>Early evangelical selling</li><li>Financial partnership development</li></ul>",
    backgroundColor: `hsl(300, ${saturation}, 30%)`,
    height: 100,
  },
  {
    id: uuid(),
    title: "SERIES A",
    text: "<ul><li>Market execution</li><li>Revenue base development</li><li>Product development</li><li>Scaling sales</li><li>Market messaging and communications</li><li>Financial partnership development</li><li>Best practices for acquirability</li></ul>",
    backgroundColor: `hsl(280, ${saturation}, 30%)`,
    height: 100,
  },
  {
    id: uuid(),
    title: "SERIES B",
    text: "<ul><li>Product manufacturing</li><li>Service scaling</li><li>Market growth</li><li>Scaling sales to next level</li><li>Performance metrics development</li><li>Expert validation and analyst coverage</li><li>Financial partnership development</li><li>Liquidity options development</li></ul>",
    backgroundColor: `hsl(260, ${saturation}, 30%)`,
    height: 100,
  },
  {
    id: uuid(),
    title: "SERIES C",
    text: "<ul><li>Product portfolio expansion</li><li>New market development</li><li>Scaling sales to next level</li><li>Profitability</li><li>Liquidity options development</li></ul>",
    backgroundColor: `hsl(240, ${saturation}, 30%)`,
    height: 100,
  },
  {
    id: uuid(),
    title: "MEZZANINE",
    text: "<ul><li>Major event financing</li><li>Merger and acquisition options development</li><li>Liquidity option focus</li></ul>",
    backgroundColor: `hsl(220, ${saturation}, 30%)`,
    height: 100,
  },
  {
    id: uuid(),
    title: "PUBLIC",
    text: "<ul><li>Company acquisition options development</li><li>Portfolio expansion through new product options development</li><li>Spin-off and Joint Venture opportunity development</li></ul>",
    backgroundColor: `hsl(200, ${saturation}, 30%)`,
    height: 100,
  },
];
