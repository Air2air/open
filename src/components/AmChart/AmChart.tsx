import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { chartData } from "./data/chartData";

export const AmChart = (props: any) => {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    // End React

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
        nodePadding: 20,
        minRadius: am5.percent(3),
        maxRadius: am5.percent(10),
      })
    );

    series.nodes.template.setAll({
      draggable: false,
    });

    series.circles.template.setAll({
      fillOpacity: 1,
      strokeWidth: 7,
      strokeOpacity: 1,
    });

    series.outerCircles.template.setAll({
      strokeWidth: 7,
    });

    series.links.template.setAll({
      strokeWidth: 5,
      strokeOpacity: 0.5,
    });

    series.data.setAll(chartData);
    series.set("selectedDataItem", series.dataItems[0]);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "300px", height: "500px" }}></div>;
};

export default AmChart;
