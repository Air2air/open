import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
//import * as am5src/fonts/robotomedium from "./../fonts/Roboto-Medium.ttf";

import { navData } from "../../data/navData";

const fillColor = 0x113961;

const  NavBubbles = (props: any) => {
  useLayoutEffect(() => {
    // Create root and chart
    var root = am5.Root.new("navdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    var container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    var series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        downDepth: 1,
        initialDepth: 0,
        singleBranchOnly: true,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        velocityDecay: 0.9,
        nodePadding: 40,
        minRadius: am5.percent(3),
        maxRadius: am5.percent(7), // Overall size control
      })
    );

    series.nodes.template.setAll({
      draggable: false,
      tooltipText: "", // Disables tooltips
    });

    series.circles.template.setAll({
      // The inside circle
      fill: am5.color(fillColor),
      fillOpacity: 1,
      strokeWidth: 5,
      strokeOpacity: 0,
    });

    series.outerCircles.template.setAll({
      // The outside ring
      stroke: am5.color(0xffffff),
      strokeWidth: 3,
    });

    series.links.template.setAll({
      // The connector links
      stroke: am5.color(0xffffff),
      strokeWidth: 3,
      strokeOpacity: 1,
    });

    series.data.setAll(navData);
    series.set("selectedDataItem", series.dataItems[0]);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="navdiv" style={{ width: "100%", height: "100vh" }}></div>;
}
export default NavBubbles;
