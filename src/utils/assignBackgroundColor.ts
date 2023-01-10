import {
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_4,
  COLOR_BASE_5,
  COLOR_BASE_6,
} from "styles/Constants";

export const assignBackgroundColor = (backgroundColor: string | number) => {
  if (typeof backgroundColor === "string" && backgroundColor.includes("hsl")) {
    return backgroundColor;
  } else if (typeof backgroundColor === "number") {
    const color = {
      1: COLOR_BASE_1,
      2: COLOR_BASE_2,
      3: COLOR_BASE_3,
      4: COLOR_BASE_4,
      5: COLOR_BASE_5,
      6: COLOR_BASE_6,
    };
    return color[backgroundColor];
  } else if (
    typeof backgroundColor === "string" &&
    !backgroundColor.includes("hsl")
  ) {
    return null;
  }
};
