import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import { chartData } from "./data/chartData";
import {
  HEADER_HEIGHT,
} from "../../styles/Constants";
import styled from "styled-components";

const AmChart4 = (props: any) => {

  am4core.useTheme(am4themes_animated);

  let chart = am4core.create(
  "chartdiv",
    am4plugins_forceDirected.ForceDirectedTree
  );
  let networkSeries = chart.series.push(
    new am4plugins_forceDirected.ForceDirectedSeries()
  );

  chart.data = chartData;
  chart.responsive.enabled = true;

  networkSeries.dataFields.value = "value";
  networkSeries.dataFields.name = "name";
  networkSeries.dataFields.children = "children";
  
  networkSeries.nodes.template.tooltipText = "";
  networkSeries.nodes.template.fillOpacity = 1;
  networkSeries.nodes.template.togglable = true;

  networkSeries.maxLevels = 2;
  networkSeries.manyBodyStrength = -20;

  //   networkSeries.velocityDecay = 0.9,
  networkSeries.minRadius = am4core.percent(5);
  networkSeries.maxRadius = am4core.percent(7);

  networkSeries.nodes.template.label.text = "{name}";
  networkSeries.fontSize = 14;
  networkSeries.links.template.strength = 0.8;



  // networkSeries.colors.list = [
  //   am4core.color(`${COLOR_ELEVENS}`),
  //   am4core.color(`${COLOR_HEALTH}`),
  //   am4core.color(`${COLOR_MED}`),
  //   am4core.color(`${COLOR_PHARMA}`),
  //   am4core.color(`${COLOR_BIO}`),
  // ];

  /* Click Selection */
  //   let clicked = networkSeries.nodes.template.states.create("selected");
  //   clicked.properties.fill = am4core.color("#333");

  //   let selectedNode: am4plugins_forceDirected.ForceDirectedNode | undefined;
  //   networkSeries.nodes.template.events.on("hit", function (ev) {
  //     if (selectedNode === ev.target) {
  //       selectedNode.fill = selectedNode.defaultState.properties.fill;
  //       selectedNode = undefined;
  //     } else {
  //       if (selectedNode) {
  //         selectedNode.fill = selectedNode.defaultState.properties.fill;
  //       }
  //       selectedNode = ev.target;
  //       selectedNode.setState("selected");
  //     }
  //   });

  /* Route Selection */
  let clicked = networkSeries.nodes.template.states.create("selected");
  clicked.properties.fill = am4core.color("#333");

  let active = networkSeries.nodes.template.states.create("selected");
  active.properties.fill = am4core.color("#333");

  let selectedNode: am4plugins_forceDirected.ForceDirectedNode | undefined;

  networkSeries.nodes.template.events.on("hit", function (ev) {
    if (selectedNode === ev.target) {
      selectedNode.fill = selectedNode.defaultState.properties.fill;
      selectedNode = undefined;
    } else {
      if (selectedNode) {
        selectedNode.fill = selectedNode.defaultState.properties.fill;
      }
      selectedNode = ev.target;
      selectedNode.setState("selected");
    }
  });

  return <ChartDiv id="chartdiv" />;
};

export default AmChart4;

const ChartDiv = styled.div`
  height: ${HEADER_HEIGHT};
  width: 50%;
  overflow: hidden;
  //background:gray;
`;
