import {
  BANNER_CONTENT_HEIGHT_DESKTOP,
  BANNER_CONTENT_HEIGHT_MOBILE,
} from "styles/Constants";

// export const transitionTime = 500;
export const columnTransition = 1000;  
export const textTransition = 600;

/* Chart Height */
export const chartSectionHeightDesktop = BANNER_CONTENT_HEIGHT_DESKTOP * 0.6;
export const chartSectionHeightMobile = BANNER_CONTENT_HEIGHT_MOBILE * 0.6;

/* Chart Legend Height */
export const chartLegendHeightDesktop = 20;
export const chartLegendHeightMobile = 10;

/* Series Height */
export const chartHeightDesktop =
  chartSectionHeightDesktop - chartLegendHeightDesktop;
export const chartHeightMobile =
  chartSectionHeightMobile - chartLegendHeightMobile;

/* Spacer Height */
export const chartSpacerHeightDesktop = BANNER_CONTENT_HEIGHT_DESKTOP * 0.07;
export const chartSpacerHeightMobile = BANNER_CONTENT_HEIGHT_MOBILE * 0.02;

/* Text Height */
export const chartTextHeightDesktop =
  BANNER_CONTENT_HEIGHT_DESKTOP -
  (chartSectionHeightDesktop + chartSpacerHeightDesktop);
export const chartTextHeightMobile =
  BANNER_CONTENT_HEIGHT_MOBILE -
  (chartSectionHeightMobile + chartSpacerHeightMobile);
