import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import { chartData } from "./data/chartData";
import { HEADER_HEIGHT } from "../../styles/Constants";
import styled from "styled-components";

const AmChart5 = (props: any) => {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Responsive.new(root),
    ]);

    const container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    const series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        downDepth: 1,
        initialDepth: 1,
        singleBranchOnly: true,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        nodePadding: 10,
        // Size
        minRadius: am5.percent(6),
        maxRadius: am5.percent(7),
        // Force
        centerStrength: 1, //	0.5 Strength all nodes are attracted (or pushed back) to the center of the chart.
        manyBodyStrength: -20, //	-15 Strength all nodes are attracted (or pushed back) to each other.
        linkWithStrength: 0.5,
        //Animation
        initialFrames: 500, //500 the length of initial force simulation in frames
        velocityDecay: 0.9, //0.5 the resistance acting against movement of nodes, making it stop eventually.
      })
    );

    series.nodes.template.setAll({
      draggable: false,
      tooltipText: "",
    });

    /* ------ Inner Circles ------ */

    series.circles.template.setAll({
      fillOpacity: 1,
      strokeWidth: 7,
      strokeOpacity: 1,
      templateField: "nodeTheme",
    });

    /* ------ Outer Circles ------ */

    series.outerCircles.template.setAll({
      strokeWidth: 0,
      /* templateField: "nodeTheme", */
    });

    series.outerCircles.template.states.create("disabled", {
      fillOpacity: 0.5,
      strokeOpacity: 0,
      strokeDasharray: 0,
    });

    series.outerCircles.template.states.create("hoverDisabled", {
      fillOpacity: 0.5,
      strokeOpacity: 0,
      strokeDasharray: 0,
    });

    /* ------ Links ------ */

    series.links.template.setAll({
      strokeWidth: 5,
      strokeOpacity: 0.5,
      /* templateField: "linkTheme",*/
    });



    /* ------ Init ------ */

    series.data.setAll(chartData);
    series.set("selectedDataItem", series.dataItems[0]); // Active item, not node

    return () => {
      root.dispose();
    };
  }, []);

  return <ChartDiv id="chartdiv"/>;
};

export default AmChart5;

const ChartDiv = styled.div`
  height: ${HEADER_HEIGHT};
  width: 50%;
  //background:gray;
`;

