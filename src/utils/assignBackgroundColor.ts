import {
  COLOR_BASE,
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_4,
  COLOR_WHITE,

} from "styles/Constants";

export const assignBackgroundColor = (backgroundColor: string | number) => {
  if (typeof backgroundColor === "string" && backgroundColor.includes("hsl")) {
    return backgroundColor;
  } else if (typeof backgroundColor === "number") {
    const color = {
      0: COLOR_WHITE,
      1: COLOR_BASE,
      2: COLOR_BASE_1,
      3: COLOR_BASE_2,
      4: COLOR_BASE_3,
      5: COLOR_BASE_4,
    };
    return color[backgroundColor];
  } else if (
    typeof backgroundColor === "string" &&
    !backgroundColor.includes("hsl")
  ) {
    return null;
  }
};
