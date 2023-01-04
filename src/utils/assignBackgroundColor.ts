import {
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_4,
  COLOR_BASE_5,
  COLOR_BASE_6,
} from "../constants/index";

export const assignBackgroundColor = (backgroundColor: number) => {
  if (backgroundColor === 1) {
    return COLOR_BASE_1;
  } else if (backgroundColor === 2) {
    return COLOR_BASE_2;
  } else if (backgroundColor === 3) {
    return COLOR_BASE_3;
  } else if (backgroundColor === 4) {
    return COLOR_BASE_4;
  } else if (backgroundColor === 5) {
    return COLOR_BASE_5;
  } else {
    return COLOR_BASE_6;
  }
};
