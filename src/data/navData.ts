import { HealthTech } from "./healthTech";
import { MedTech } from "./medTech";
import { PharmaTech } from "./pharmaTech";
import { BioTech } from "./bioTech";

import { parentNodeSize } from "../components/AmCharts/config";
import {
  firstChildNodeSize, secondChildNodeSize,
} from "../components/AmCharts/config";


export const navData = [
  {
    name: "Elevens",
    value: parentNodeSize,
    children: [  name: "Bio Tech",
    value: firstChildNodeSize
      {
        name: "Pre Seed",
        value: secondChildNodeSize,
        data: "There are over ABCD ventures in this category",
        contact:
          "To learn more about how we help these ventures email us or visit us on LinkedIn",
        content: "content here",
        link: "bio_tech_"
      },
      {
        name: "Seed Stage",
        value: secondChildNodeSize,
        data: "There are over ABCD ventures in this category",
        contact:
          "To learn more about how we help these ventures email us or visit us on LinkedIn",
        content: "content here",
        link: "bio_tech_"
      },
      {
        name: "Series A",
        value: secondChildNodeSize,
        data: "There are over ABCD ventures in this category",
        contact:
          "To learn more about how we help these ventures email us or visit us on LinkedIn",
        content: "content here",
        link: "bio_tech_"
      },
    
      {
        name: "Series B",
        value: secondChildNodeSize,
        data: "There are over ABCD ventures in this category",
        contact:
          "To learn more about how we help these ventures email us or visit us on LinkedIn",
        content: "content here",
        link: "bio_tech_"
      },
      {
        name: "Series C",
        value: secondChildNodeSize,
        data: "There are over ABCD ventures in this category",
        contact:
          "To learn more about how we help these ventures email us or visit us on LinkedIn",
        content: "content here",
        link: "bio_tech_"
      },
      {
        name: "Mezzanine",
        value: secondChildNodeSize,
        data: "There are over ABCD ventures in this category",
        contact:
          "To learn more about how we help these ventures email us or visit us on LinkedIn",
        content: "content here",
        link: "bio_tech_"
      },
      {
        name: "Public",
        value: secondChildNodeSize,
        data: "There are over ABCD ventures in this category",
        contact:
          "To learn more about how we help these ventures email us or visit us on LinkedIn",
        content: "content here",
        link: "bio_tech_"
      },
    
    children: [ HealthTech, MedTech, PharmaTech],
  },
];
