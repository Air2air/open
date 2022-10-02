import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import am5themes_Kelly from "@amcharts/amcharts5/themes/Kelly";

import { navData } from "../../data/navData";



const NavBubbles = (props: any) => {
  useLayoutEffect(() => {
    // Create root and chart
    var root = am5.Root.new("navdiv");

    root.setThemes([
      am5themes_Animated.new(root), 
      am5themes_Responsive.newEmpty(root),
      // am5themes_Dark.new(root),
      am5themes_Kelly.new(root),
    ]);

    var container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.horizontalLayout,
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
        nodePadding: 30,
        minRadius: am5.percent(4),
        centerStrength: 2,
        manyBodyStrength: -2,
        //maxRadius: am5.percent(7), // Overall size control
      })
    );



    // root.setThemes.rule("ColorSet").set("colors", [
    //   am5.color(0x095256),
    //   am5.color(0x087f8c),
    //   am5.color(0x5aaa95),
    //   am5.color(0x86a873),
    //   am5.color(0xbb9f06)
    // ]);

    series.nodes.template.setAll({
      draggable: false,
      tooltipText: "", // Disables tooltips
    });

    series.circles.template.setAll({
      interactive: true,
      stateAnimationDuration: 1000,
      stateAnimationEasing: am5.ease.out(am5.ease.cubic),
      fillOpacity: 1,
      strokeWidth: 5,
      strokeOpacity: 0,
      lineJoin: "round",
    });

    series.circles.template.states.create("hover", {
      // fillOpacity: 0.5,
      strokeOpacity: 0,
      strokeDasharray: 1,
      strokeDashoffset: 3,
      fill: am5.color(0x297373),
      stroke: am5.color(0x297373),
    });

    series.outerCircles.template.setAll({
      // The outside ring
      stroke: am5.color(0xffffff),
      strokeWidth: 3,
    });

    series.outerCircles.template.states.create("hover", {
      // fillOpacity: 0.5,
      strokeOpacity: 0,
      strokeDasharray: 1,
      fill: am5.color(0x297373),
      stroke: am5.color(0x297373),
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

  return (
    <div
      id="navdiv"
      style={{
        width: "90%",
        height: "100vh",
        margin: "0 auto",
      }}
    ></div>
  );
};
export default NavBubbles;
