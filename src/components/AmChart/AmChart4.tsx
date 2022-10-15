import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import { chartData } from "./data/chartData";
import { HEADER_HEIGHT } from "../../styles/Constants";
import styled from "styled-components";

const AmChart4 = (props: any) => {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  let chart = am4core.create(
    "chartdiv",
    am4plugins_forceDirected.ForceDirectedTree
  );
  let networkSeries = chart.series.push(
    new am4plugins_forceDirected.ForceDirectedSeries()
  );

  chart.data = chartData


  networkSeries.dataFields.value = "value";
  networkSeries.dataFields.name = "name";
  networkSeries.dataFields.children = "children";
  networkSeries.nodes.template.tooltipText = "{name}:{value}";
  networkSeries.nodes.template.fillOpacity = 1;
  networkSeries.nodes.template.togglable = false;

  networkSeries.manyBodyStrength = -20;
  networkSeries.links.template.strength = 0.8;
  networkSeries.minRadius = am4core.percent(2);

  networkSeries.nodes.template.label.text = "{name}";
  networkSeries.fontSize = 10;

  let hl = networkSeries.nodes.template.states.create("selected");
  hl.properties.fill = am4core.color("#c55");

  let selectedNode;
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
  //background:gray;
`;
