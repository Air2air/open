const thresholdMin = 0.5;
const thresholdMax = 0.9;

export const setOpacity = (percentage) => {
  const opacity = Math.round(percentage * 1000) / 1000;

  // If the percentage is less than 0.25, return it
  if (opacity < thresholdMin) {
    return opacity;
  }

  // If it's between 0.25 and 0.5, multiply it by 2
  if (opacity > thresholdMin && opacity < thresholdMax) {
    return opacity * 2;
  }

  // If the percentage is more than 0.5, return 1
  if (opacity > thresholdMax) {
    return 1;
  }
};



