import {
  COLOR_BASE,
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_4,
  COLOR_BASE_5,
  COLOR_BASE_6,
} from "constants/index";

export const assignBackgroundColor = (color?: number) => {
  if (color === 1 || "1") {
    return { COLOR_BASE };
  } else if (color === 2 || "2") {
    return { COLOR_BASE_1 };
  } else if (color === 3 || "3") {
    return { COLOR_BASE_2 };
  } else if (color === 4 || "4") {
    return { COLOR_BASE_3 };
  } else if (color === 5 || "5") {
    return { COLOR_BASE_4 };
  } else if (color === 6 || "6") {
    return { COLOR_BASE_5 };
  } else {
    return { COLOR_BASE_6 };
  }
}
