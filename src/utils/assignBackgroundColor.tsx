import {
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_4,
  COLOR_BASE_5,
} from "constants/index";

export const assignBackgroundColor = (props: any) => {
  if (props.backgroundColor === 1 || "1") {
    return {COLOR_BASE_1};
  } else if (props.backgroundColor === 2 || "2") {
    return {COLOR_BASE_2};
  } else if (props.backgroundColor === 3 || "3") {
    return {COLOR_BASE_3};
  } else if (props.backgroundColor === 4 || "4") {
    return {COLOR_BASE_4};
  } else if (props.backgroundColor === 5 || "5") {
    return {COLOR_BASE_5};
  } else {
    return props.backgroundColor;
  }
};
