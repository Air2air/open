
import { v4 as uuid } from "uuid";

export const dataVentureStage = [
  {
    id: uuid(),
    order: 1,
    title: "PRE-SEED STAGE",
    text: "<ul><li>Prototype-to-market fit adjustment</li><li>Human Assets and capabilities needs assessment</li><li>Market sizing</li><li>Competitive landscape assessment</li><li>Funding assessment to get to Seed</li><li>Seed funding introductions</li></ul>",
    side: "left",
    color: "#ffffff",
  },
  {
    id: uuid(),
    order: 2,
    title: "SEED STAGE",
    text: "<ul><li>Product-to-market fit adjustment</li><li>Market focus</li><li>Revenue modeling</li><li>IP portfolio management</li><li>Product development</li><li>Early evangelical selling</li><li>Financial partnership development</li></ul>",
    side: "right",
    color: "#ffffff",
  },
  {
    id: uuid(),
    order: 3,
    title: "SERIES A STAGE",
    text: "<ul><li>Market execution</li><li>Revenue base development</li><li>Product development</li><li>Scaling sales</li><li>Market messaging and communications</li><li>Financial partnership development</li><li>Best practices for acquirability</li></ul>",
    side: "left",
    color: "#ffffff",
  },
  {
    id: uuid(),
    order: 4,
    title: "SERIES B STAGE",
    text: "<ul><li>Product manufacturing</li><li>Service scaling</li><li>Market growth</li><li>Scaling sales to next level</li><li>Performance metrics development</li><li>Expert validation and analyst coverage</li><li>Financial partnership development</li><li>Liquidity options development</li></ul>",
    side: "right",
    color: "#ffffff",
  },
  {
    id: uuid(),
    order: 5,
    title: "SERIES C STAGE",
    text: "<ul><li>Product portfolio expansion</li><li>New market development</li><li>Scaling sales to next level</li><li>Profitability</li><li>Liquidity options development</li></ul>",
    side: "left",
    color: "#ffffff",
  },
  {
    id: uuid(),
    order: 6,
    title: "MEZZANINE STAGE",
    text: "<ul><li>Major event financing</li><li>Merger and acquisition options development</li><li>Liquidity option focus</li></ul>",
    side: "right",
    color: "#ffffff",
  },
  {
    id: uuid(),
    order: 7,
    title: "PUBLIC STAGE",
    text: "<ul><li>Company acquisition options development</li><li>Portfolio expansion through new product options development</li><li>Spin-off and Joint Venture opportunity development</li></ul>",
    side: "left",
    color: "#ffffff",
  },
];
