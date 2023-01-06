import {
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_4,
  COLOR_BASE_5,
  COLOR_BASE_6,
} from "styles/Constants";




export const assignBackgroundColor = (backgroundColor) => {
  const color = {
    1: COLOR_BASE_1,
    2: COLOR_BASE_2,
    3: COLOR_BASE_3,
    4: COLOR_BASE_4,
    5: COLOR_BASE_5,
    6: COLOR_BASE_6,
  };
  return color[backgroundColor] ?? null;
};



// create a function that takes in a number and returns a color