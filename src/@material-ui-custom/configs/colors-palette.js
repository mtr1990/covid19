// COMMONS
const primary = "rgb(0, 145, 242)";
const secondary = "rgb(101, 84, 192)";
const info = "rgb(0, 184, 217)";
const success = "rgb(54, 179, 126)";
const warning = "rgb(255, 171, 0)";
const error = "rgb(255, 86, 48)";
const white = "#FFF";

const grey = [
  "rgb(248, 249, 250)", // [0]f8f9fa
  "rgb(241, 243, 245)", // [1]f1f3f5
  "rgb(233, 236, 239)", // [2]e9ecef
  "rgb(222, 226, 230)", // [3]dee2e6
  "rgb(206, 212, 218)", // [4]ced4da
  "rgb(173, 181, 189)", // [5]adb5bd
  "rgb(134, 142, 150)", // [6]868e96
  "rgb(73, 80, 87)", // [7]495057
  "rgb(52, 58, 64)", // [8]343a40
  "rgb(33, 37, 41)", // [9]212529
  "rgb(30, 33, 37)", // [10]1e2125
  "rgb(26, 30, 33)", // [11]1a1e21
];

// LIGHT
const light_bg = white;
const light_contrast_lower = grey[3];
const light_contrast_low = grey[4];
const light_contrast_medium = grey[6];
const light_contrast_high = grey[7];
const light_contrast_higher = grey[9];

// DARK
const dark_bg = grey[10];
const dark_contrast_lower = grey[9];
const dark_contrast_low = grey[7];
const dark_contrast_medium = grey[6];
const dark_contrast_high = grey[5];
const dark_contrast_higher = grey[3];

export const muiPaletteLight = {
  primary: { main: primary },
  secondary: { main: secondary },
  info: { main: info },
  success: { main: success },
  warning: { main: warning },
  error: { main: error },

  contrast: {
    lower: light_contrast_lower,
    low: light_contrast_low,
    medium: light_contrast_medium,
    high: light_contrast_high,
    higher: light_contrast_higher,
  },

  text: {
    primary: light_contrast_high,
    secondary: light_contrast_medium,
    disabled: light_contrast_low,
    hint: success,
    icon: success,
  },

  divider: light_contrast_lower,

  background: {
    card: white,
    paper: white,
    default: light_bg,
  },

  action: {
    // hoverOpacity: 0.12,
    active: light_contrast_medium,
    hover: light_contrast_lower,
    selected: light_contrast_lower,
    disabled: light_contrast_low,
    disabledBackground: success,
    focus: success,
  },
};

export const muiPaletteDark = {
  primary: { main: primary },
  secondary: { main: secondary },
  info: { main: info },
  success: { main: success },
  warning: { main: warning },
  error: { main: error },

  contrast: {
    lower: dark_contrast_lower,
    low: dark_contrast_low,
    medium: dark_contrast_medium,
    high: dark_contrast_high,
    higher: dark_contrast_higher,
  },

  text: {
    primary: white,
    secondary: dark_contrast_medium,
    disabled: dark_contrast_low,
    hint: dark_contrast_medium,
    icon: dark_contrast_medium,
  },

  divider: grey[8],

  background: {
    card: dark_contrast_lower,
    paper: dark_contrast_lower,
    default: dark_bg,
  },

  action: {
    // hoverOpacity: 0.12,
    active: dark_contrast_medium,
    hover: dark_contrast_low,
    selected: dark_contrast_lower,
    disabled: dark_contrast_low,
    disabledBackground: dark_contrast_low,
    focus: success,
  },
};
