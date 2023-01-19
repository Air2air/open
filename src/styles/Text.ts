// FAMILY

import {
  COLOR_BANNER_HEADING,
  COLOR_BANNER_SUBHEAD,
  COLOR_HEADING,
  COLOR_HEADING_BLOCK_BACKGROUND,
  COLOR_SUBHEAD,
} from "./Colors";

export const FONT_FAMILY_HEADING = `"Sofia Sans Light", sans-serif`;
export const FONT_FAMILY_SUBHEAD = `"Sofia Sans Bold", sans-serif`;
export const FONT_FAMILY_DEFAULT = `"Roboto", sans-serif`;
export const FONT_FAMILY_SECONDARY = `"Sofia Sans Medium", sans-serif`;

// SIZES
export const FONT_SIZE_HEADING_DESKTOP = "2.7em";
export const FONT_SIZE_HEADING_MOBILE = "1.7em";

export const FONT_SIZE_BANNER_SUBHEAD_DESKTOP = "1.5em";
export const FONT_SIZE_BANNER_SUBHEAD_MOBILE = "1.1em";

export const FONT_SIZE_SUBHEAD_DESKTOP = "1.4em";
export const FONT_SIZE_SUBHEAD_MOBILE = "1.3em";

export const FONT_SIZE_CAPTION_DESKTOP = "1.05em";
export const FONT_SIZE_CAPTION_MOBILE = ".9em";

export const FONT_SIZE_DEFAULT_DESKTOP = "1.05em";
export const FONT_SIZE_DEFAULT_MOBILE = ".95em";

export const FONT_SIZE_BUTTON_DESKTOP = "1.1em";
export const FONT_SIZE_BUTTON_MOBILE = "1.1em";

// LINE-HEIGHT
export const LINE_HEIGHT_DEFAULT_DESKTOP = "1.8em";
export const LINE_HEIGHT_DEFAULT_MOBILE = "1.6em";

export const LINE_HEIGHT_HEADING_DESKTOP = "1.7em";
export const LINE_HEIGHT_HEADING_MOBILE = "1.2em";

export const LINE_HEIGHT_SUBHEAD_DESKTOP = "1.7em";
export const LINE_HEIGHT_SUBHEAD_MOBILE = "1.2em";

export const LINE_HEIGHT_BUTTON_DESKTOP = "1.5em";
export const LINE_HEIGHT_BUTTON_MOBILE = "1.3em";

// WEIGHTS
export const FONT_WEIGHT_LIGHT = 100; //Roboto: 100;300;400;500;700
export const FONT_WEIGHT_DEFAULT = 300; //Roboto: 100;300;400;500;700
export const FONT_WEIGHT_SEMIBOLD = 500; //Roboto Condensed: 300;400;700
export const FONT_WEIGHT_BOLD = 600;



// BANNER HEADING
export const FONT_BANNER_HEADING_DESKTOP = `
padding: 0 8px;
font-size: ${FONT_SIZE_HEADING_DESKTOP}; 
font-family: ${FONT_FAMILY_HEADING}; 
line-height: ${LINE_HEIGHT_HEADING_DESKTOP}; 
color: ${COLOR_BANNER_HEADING};
background: ${COLOR_HEADING_BLOCK_BACKGROUND}`;

export const FONT_BANNER_HEADING_MOBILE = `
padding: 0 8px;
font-size: ${FONT_SIZE_HEADING_MOBILE}; 
font-family: ${FONT_FAMILY_HEADING}; 
line-height: ${LINE_HEIGHT_HEADING_MOBILE}; 
color: ${COLOR_BANNER_HEADING};
background: ${COLOR_HEADING_BLOCK_BACKGROUND}`;

// BANNER SUBHEAD
export const FONT_BANNER_SUBHEAD_DESKTOP = `
padding: 0 8px;
font-size: ${FONT_SIZE_BANNER_SUBHEAD_DESKTOP}; 
font-family: ${FONT_FAMILY_SUBHEAD}; 
line-height: ${LINE_HEIGHT_SUBHEAD_DESKTOP}; 
color: ${COLOR_BANNER_SUBHEAD};
background: ${COLOR_HEADING_BLOCK_BACKGROUND}`;

export const FONT_BANNER_SUBHEAD_MOBILE = `
padding: 0 8px;
font-size: ${FONT_SIZE_BANNER_SUBHEAD_MOBILE}; 
font-family: ${FONT_FAMILY_SUBHEAD}; 
line-height: ${LINE_HEIGHT_SUBHEAD_MOBILE}; 
color: ${COLOR_BANNER_SUBHEAD};
background: ${COLOR_HEADING_BLOCK_BACKGROUND}`;

// HEADING
export const FONT_HEADING_DESKTOP = `
font-size: ${FONT_SIZE_HEADING_DESKTOP}; 
font-family: ${FONT_FAMILY_HEADING}; 
line-height: ${LINE_HEIGHT_HEADING_DESKTOP}; 
color: ${COLOR_HEADING};`;

export const FONT_HEADING_MOBILE = `
font-size: ${FONT_SIZE_HEADING_MOBILE}; 
font-family: ${FONT_FAMILY_HEADING}; 
line-height: ${LINE_HEIGHT_HEADING_MOBILE}; 
color: ${COLOR_HEADING};`;

// SUBHEAD
export const FONT_SUBHEAD_DESKTOP = `
font-size: ${FONT_SIZE_SUBHEAD_DESKTOP}; 
font-family: ${FONT_FAMILY_SUBHEAD}; 
line-height: ${LINE_HEIGHT_SUBHEAD_DESKTOP}; 
text-transform: uppercase;
opacity: 0.5;
margin-top:10px;
margin-bottom:40px; 
color: ${COLOR_SUBHEAD};`;

export const FONT_SUBHEAD_MOBILE = `
font-size: ${FONT_SIZE_SUBHEAD_MOBILE}; 
font-family: ${FONT_FAMILY_SUBHEAD}; 
line-height: ${LINE_HEIGHT_SUBHEAD_MOBILE}; 
text-transform: uppercase;  opacity: 0.7;
margin-top:10px;
margin-bottom:20px; 
color: ${COLOR_SUBHEAD};`;

// CAPTION
export const FONT_CAPTION_DESKTOP = `
font: ${FONT_WEIGHT_SEMIBOLD} ${FONT_SIZE_CAPTION_DESKTOP} ${FONT_FAMILY_SECONDARY}; 
text-transform: uppercase;`;
export const FONT_CAPTION_MOBILE = `
font: ${FONT_WEIGHT_SEMIBOLD} ${FONT_SIZE_CAPTION_MOBILE} ${FONT_FAMILY_SECONDARY}; 
text-transform: uppercase; `;

// SECONDARY
export const FONT_SECONDARY_DESKTOP = `
font: ${FONT_WEIGHT_SEMIBOLD} ${FONT_SIZE_DEFAULT_DESKTOP} ${FONT_FAMILY_SECONDARY};`;
export const FONT_SECONDARY_MOBILE = `
font: ${FONT_WEIGHT_SEMIBOLD} ${FONT_SIZE_DEFAULT_MOBILE} ${FONT_FAMILY_SECONDARY};`;

// DEFAULT
export const FONT_DEFAULT_DESKTOP = `
font-weight: ${FONT_WEIGHT_DEFAULT}; 
font-size: ${FONT_SIZE_DEFAULT_DESKTOP}; 
font-family: ${FONT_FAMILY_DEFAULT}; 
line-height: ${LINE_HEIGHT_DEFAULT_DESKTOP};`;

export const FONT_DEFAULT_MOBILE = `
font-weight: ${FONT_WEIGHT_DEFAULT}; 
font-size: ${FONT_SIZE_DEFAULT_MOBILE}; 
font-family: ${FONT_FAMILY_DEFAULT}; 
line-height: ${LINE_HEIGHT_DEFAULT_MOBILE};`;

// BUTTON
export const FONT_BUTTON_DESKTOP = `
font-weight: ${FONT_WEIGHT_SEMIBOLD}; 
font-size: ${FONT_SIZE_BUTTON_DESKTOP}; 
font-family: ${FONT_FAMILY_SECONDARY}; 
line-height: ${LINE_HEIGHT_BUTTON_DESKTOP};`;

export const FONT_BUTTON_MOBILE = `
font-weight: ${FONT_WEIGHT_SEMIBOLD}; 
font-size: ${FONT_SIZE_BUTTON_MOBILE}; 
font-family: ${FONT_FAMILY_SECONDARY}; 
line-height: ${LINE_HEIGHT_BUTTON_MOBILE};`;
