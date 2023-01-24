import {
  COLOR_CALLOUT_0,
  COLOR_CALLOUT_1,
  COLOR_CALLOUT_2,
  COLOR_CALLOUT_3,
} from "styles/Constants";

export const assignCallOutColor = (backgroundColor: string | number) => {
  // If the background color is assigned as a string and it contains the string 'hsl'
  // then return the string as is
  if (typeof backgroundColor === "string" && backgroundColor.includes("hsl")) {
    return backgroundColor;
  }
  // If the background color is assigned as a number, then return the corresponding color
  // from the color object
  else if (typeof backgroundColor === "number") {
    const color = {
      0: COLOR_CALLOUT_0,
      1: COLOR_CALLOUT_1,
      2: COLOR_CALLOUT_2,
      3: COLOR_CALLOUT_3,
    };
    return color[backgroundColor];
  }
  // If the background color is assigned as a string and it does not contain the string 'hsl'
  // then return null
  else if (
    typeof backgroundColor === "string" &&
    !backgroundColor.includes("hsl")
  ) {
    return null;
  }
};
