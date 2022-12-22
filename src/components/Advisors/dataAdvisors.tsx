import { v4 as uuid } from "uuid";


export const dataAdvisors = [
  {
    id: uuid(),
    nameLast: "Fine",
    nameFirst: "Benjamin",
    role: "Advisor",
    text: "Description here. Description here. Description here. Description here.  Description here. Description here.",
    photo: "fine.jpeg",
    showPhoto: false,
    linkedin:"https://www.linkedin.com/in/benfine"
  },
  {
    id: uuid(),
    nameLast: "Kleck",
    nameFirst: "Jeff",
    role: "Advisor",
    text: "Description here. Description here. Description here. Description here.  Description here. Description here.",
    photo: "kleck.jpeg",
    showPhoto: false,
    linkedin:"https://www.linkedin.com/in/jeff-kleck-a000299/"
  },
  {
    id: uuid(),
    nameLast: "Lungren",
    nameFirst: "Matthew",
    role: "Advisor",
    text: "Matt Bio",
    photo: "lungren.jpeg",
    showPhoto: false,
    linkedin:"https://www.linkedin.com/in/mattlungrenmd/"
  },
];
