import { keys, isObject, mean } from "lodash";

let mymap = {
  Elevens: {
    BioTech: {
      "Circulation 1": 10,
      "Contraction cardiaque": 20,
      "Système nerveux intrinsèque, extrinsèque": 40,
      "Cycle cardiaque": 60,
      "Fréquence cardiaque": 80,
      Électrocardiogramme: 100,
    },
    HealthTech: {
      "Circulation 2": 10,
      "Contraction cardiaque": 20,
      "Système nerveux intrinsèque, extrinsèque": 40,
      "Cycle cardiaque": 60,
      "Fréquence cardiaque": 80,
      Électrocardiogramme: 100,
    },
    MedTech: {
      "Compositionn de l'air": 10,
      "Cycle respiratoire et fréquence respiratoire": 20,
      "Contrôles et régulation de de la respiration": 30,
      "Mécanique et motricité de la respiration": 40,
      "Échanges et transport de gaz": 50,
    },
    PharmaTech: {
      "Étapes physiologiques de la digestion": 95,
      "Les nutriments": 70,
    },
  },
};

let getNodeProgress = function (node) {
  if (isObject(node)) {
    return Math.round(
      mean(keys(node).map((key) => getNodeProgress(node[key])))
    );
  } else {
    return node;
  }
};

let transform = function (map, nodeMap = { nodes: [], links: [] }) {
  if (isObject(map)) {
    keys(map).forEach((key) => {
      nodeMap.nodes.push({
        id: key,
        name: key,
        progress: getNodeProgress(map[key]),
      });
      if (isObject(map[key])) {
        keys(map[key]).forEach((subkey) => {
          nodeMap.links.push({ source: key, target: subkey });
        });
        transform(map[key], nodeMap);
      }
    });
  }
  return nodeMap;
};

export default transform(mymap);
