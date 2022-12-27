import { v4 as uuid } from "uuid";
const saturation = "15%";

export const dataPracticeAreas = [
  {
    id: 0,
    titleLong: "{x} = CLINICAL",
    title: "Clinical",
    text: "The world's foremost clinical talent guides Eleven's digital health ventures to the best possible outcomes. Your Chief Medical AI Officer offers deep technical and clinical support for broader consumer health sector landscape (e.g., patient engagement, wearables, digital health and wellness).",
    backgroundColor: `hsl(180, ${saturation}, 30%)`,
    height: 100,
  },
  {
    id: uuid(),
    titleLong: "{x} = AI/ML",
    title: "AI/ML",
    text: "Experts from the preeminent academic and commercial AI/ML programs accelerate Eleven's digital health ventures.",
    backgroundColor: `hsl(160, ${saturation}, 35%)`,
    height: 100,
  },
  {
    id: uuid(),
    titleLong: "{x} = PRODUCT",
    title: "Product",
    text: "Commercial product specialists from leading commercial enterprises help sculpt Eleven's digital health ventures, including: <p><ul><li>Go-to-market and product positioning.</li><li>Pricing methodology for clinical machine learning and digital health solutions.</li><li>Segment landscape, needs, and priorities to drive adoption.</li></ul></p>",
    backgroundColor: `hsl(140, ${saturation}, 40%)`,
    height: 100,
  },
  {
    id: uuid(),
    titleLong: "{x} = MARKETING",
    title: "Marketing",
    text: "Professionals shaping some of the most storied companies in modern healthcare position Eleven's digital health ventures.  This can also include support for early adoption academic initiatives and activities including grants, publications, and collaborations.",
    backgroundColor: `hsl(120, ${saturation}, 45%)`,
    height: 100,
  },
  {
    id: uuid(),
    titleLong: "{x} = REGULATORY",
    title: "Regulatory",
    text: "Authorities in FDA regulation and practice provide support for Eleven's digital health ventures.",
    backgroundColor: `hsl(100, ${saturation}, 50%)`,
    height: 100,
  },
  {
    id: uuid(),
    titleLong: "{x} = STRATEGY",
    title: "Strategy",
    text: "Strategists responsible for inventing and innovating new market segments over two decades fabricate direction for Eleven's digital health ventures. These can include:<p><ul><li>Strategic investments and structuring corporate vehicles (e.g., corporate venture capital, or CVC).</li><li>Growth guidance including market segment, therapeutic area or disease category from competitive, partnering or investment perspectives.</li><li>Multidisciplinary fundraising, positioning vision, strategy and business model for digital health and digital medicine.</li><li> M & A commercial due diligence including market assessment, evaluation of the competitive landscape, and analysis of the target's value proposition and post-acquisition growth strategy.</ul></p>",
    backgroundColor: `hsl(80, ${saturation}, 55%)`,
    buttonText: "Case Studies",
    buttonTo: "/casestudies",
    buttonColor: "gray",
    height: 100,
  },
];
