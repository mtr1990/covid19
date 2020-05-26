// Color Light
const color_light = "173, 181, 189";
const onlight_1 = `rgba(${color_light},0.2)`;
const onlight_2 = `rgba(${color_light},0.14)`;
const onlight_3 = `rgba(${color_light},0.12)`;

// Color Dark
const color_dark = "0,0,0";
const ondark_1 = `rgba(${color_dark},0.2)`;
const ondark_2 = `rgba(${color_dark},0.14)`;
const ondark_3 = `rgba(${color_dark},0.12)`;

export const muiShadowsLight = [
  "none",
  `0px 2px 1px -1px ${onlight_1},0px 1px 1px 0px ${onlight_2},0px 1px 3px 0px ${onlight_3}`,
  `0px 3px 1px -2px ${onlight_1},0px 2px 2px 0px ${onlight_2},0px 1px 5px 0px ${onlight_3}`,
  `0px 3px 3px -2px ${onlight_1},0px 3px 4px 0px ${onlight_2},0px 1px 8px 0px ${onlight_3}`,
  `0px 2px 4px -1px ${onlight_1},0px 4px 5px 0px ${onlight_2},0px 1px 10px 0px ${onlight_3}`,
  `0px 3px 5px -1px ${onlight_1},0px 5px 8px 0px ${onlight_2},0px 1px 14px 0px ${onlight_3}`,
  `0px 3px 5px -1px ${onlight_1},0px 6px 10px 0px ${onlight_2},0px 1px 18px 0px ${onlight_3}`,
  `0px 4px 5px -2px ${onlight_1},0px 7px 10px 1px ${onlight_2},0px 2px 16px 1px ${onlight_3}`,
  `0px 5px 5px -3px ${onlight_1},0px 8px 10px 1px ${onlight_2},0px 3px 14px 2px ${onlight_3}`,
  `0px 5px 6px -3px ${onlight_1},0px 9px 12px 1px ${onlight_2},0px 3px 16px 2px ${onlight_3}`,
  `0px 6px 6px -3px ${onlight_1},0px 10px 14px 1px ${onlight_2},0px 4px 18px 3px ${onlight_3}`,
  `0px 6px 7px -4px ${onlight_1},0px 11px 15px 1px ${onlight_2},0px 4px 20px 3px ${onlight_3}`,
  `0px 7px 8px -4px ${onlight_1},0px 12px 17px 2px ${onlight_2},0px 5px 22px 4px ${onlight_3}`,
  `0px 7px 8px -4px ${onlight_1},0px 13px 19px 2px ${onlight_2},0px 5px 24px 4px ${onlight_3}`,
  `0px 7px 9px -4px ${onlight_1},0px 14px 21px 2px ${onlight_2},0px 5px 26px 4px ${onlight_3}`,
  `0px 8px 9px -5px ${onlight_1},0px 15px 22px 2px ${onlight_2},0px 6px 28px 5px ${onlight_3}`,
  `0px 8px 10px -5px ${onlight_1},0px 16px 24px 2px ${onlight_2},0px 6px 30px 5px ${onlight_3}`,
  `0px 8px 11px -5px ${onlight_1},0px 17px 26px 2px ${onlight_2},0px 6px 32px 5px ${onlight_3}`,
  `0px 9px 11px -5px ${onlight_1},0px 18px 28px 2px ${onlight_2},0px 7px 34px 6px ${onlight_3}`,
  `0px 9px 12px -6px ${onlight_1},0px 19px 29px 2px ${onlight_2},0px 7px 36px 6px ${onlight_3}`,
  `0px 10px 13px -6px ${onlight_1},0px 20px 31px 3px ${onlight_2},0px 8px 38px 7px ${onlight_3}`,
  `0px 10px 13px -6px ${onlight_1},0px 21px 33px 3px ${onlight_2},0px 8px 40px 7px ${onlight_3}`,
  `0px 10px 14px -6px ${onlight_1},0px 22px 35px 3px ${onlight_2},0px 8px 42px 7px ${onlight_3}`,
  `0px 11px 14px -7px ${onlight_1},0px 23px 36px 3px ${onlight_2},0px 9px 44px 8px ${onlight_3}`,
  `0px 11px 15px -7px ${onlight_1},0px 24px 38px 3px ${onlight_2},0px 9px 46px 8px ${onlight_3}`,
  // Custums
  {
    thumbnail: `inset 6px 0 12px 0px rgba(${color_light}, 0.12)`,

    card: `4px 8px 24px 0 rgba(${color_light}, 0.48)`,

    image: `48px 48px 80px 0 rgba(${color_light}, 0.48)`,
    dialog: `48px 48px 80px 0 rgba(${color_dark}, 0.24)`,
    drawer: `16px 8px 24px 0 rgba(${color_light}, 0.32)`,
    menu: `4px 12px 48px 0 rgba(${color_light}, 0.72)`,
  },
];

export const muiShadowsDark = [
  "none",
  `0px 2px 1px -1px ${ondark_1},0px 1px 1px 0px ${ondark_2},0px 1px 3px 0px ${ondark_3}`,
  `0px 3px 1px -2px ${ondark_1},0px 2px 2px 0px ${ondark_2},0px 1px 5px 0px ${ondark_3}`,
  `0px 3px 3px -2px ${ondark_1},0px 3px 4px 0px ${ondark_2},0px 1px 8px 0px ${ondark_3}`,
  `0px 2px 4px -1px ${ondark_1},0px 4px 5px 0px ${ondark_2},0px 1px 10px 0px ${ondark_3}`,
  `0px 3px 5px -1px ${ondark_1},0px 5px 8px 0px ${ondark_2},0px 1px 14px 0px ${ondark_3}`,
  `0px 3px 5px -1px ${ondark_1},0px 6px 10px 0px ${ondark_2},0px 1px 18px 0px ${ondark_3}`,
  `0px 4px 5px -2px ${ondark_1},0px 7px 10px 1px ${ondark_2},0px 2px 16px 1px ${ondark_3}`,
  `0px 5px 5px -3px ${ondark_1},0px 8px 10px 1px ${ondark_2},0px 3px 14px 2px ${ondark_3}`,
  `0px 5px 6px -3px ${ondark_1},0px 9px 12px 1px ${ondark_2},0px 3px 16px 2px ${ondark_3}`,
  `0px 6px 6px -3px ${ondark_1},0px 10px 14px 1px ${ondark_2},0px 4px 18px 3px ${ondark_3}`,
  `0px 6px 7px -4px ${ondark_1},0px 11px 15px 1px ${ondark_2},0px 4px 20px 3px ${ondark_3}`,
  `0px 7px 8px -4px ${ondark_1},0px 12px 17px 2px ${ondark_2},0px 5px 22px 4px ${ondark_3}`,
  `0px 7px 8px -4px ${ondark_1},0px 13px 19px 2px ${ondark_2},0px 5px 24px 4px ${ondark_3}`,
  `0px 7px 9px -4px ${ondark_1},0px 14px 21px 2px ${ondark_2},0px 5px 26px 4px ${ondark_3}`,
  `0px 8px 9px -5px ${ondark_1},0px 15px 22px 2px ${ondark_2},0px 6px 28px 5px ${ondark_3}`,
  `0px 8px 10px -5px ${ondark_1},0px 16px 24px 2px ${ondark_2},0px 6px 30px 5px ${ondark_3}`,
  `0px 8px 11px -5px ${ondark_1},0px 17px 26px 2px ${ondark_2},0px 6px 32px 5px ${ondark_3}`,
  `0px 9px 11px -5px ${ondark_1},0px 18px 28px 2px ${ondark_2},0px 7px 34px 6px ${ondark_3}`,
  `0px 9px 12px -6px ${ondark_1},0px 19px 29px 2px ${ondark_2},0px 7px 36px 6px ${ondark_3}`,
  `0px 10px 13px -6px ${ondark_1},0px 20px 31px 3px ${ondark_2},0px 8px 38px 7px ${ondark_3}`,
  `0px 10px 13px -6px ${ondark_1},0px 21px 33px 3px ${ondark_2},0px 8px 40px 7px ${ondark_3}`,
  `0px 10px 14px -6px ${ondark_1},0px 22px 35px 3px ${ondark_2},0px 8px 42px 7px ${ondark_3}`,
  `0px 11px 14px -7px ${ondark_1},0px 23px 36px 3px ${ondark_2},0px 9px 44px 8px ${ondark_3}`,
  `0px 11px 15px -7px ${ondark_1},0px 24px 38px 3px ${ondark_2},0px 9px 46px 8px ${ondark_3}`,
  // Custums
  {
    thumbnail: `inset 4px 4px 8px 0px rgba(${color_dark}, 0.24)`,
    image: `24px 64px 128px -24px rgba(${color_dark}, 1)`,
    dialog: `48px 48px 80px 0 rgba(${color_dark}, 0.24)`,
    card: `0 32px 48px -24px rgba(${color_dark}, 0.48)`,
    drawer: `16px 8px 24px 0 rgba(${color_dark}, 0.16)`,
    menu: `4px 12px 48px 0 rgba(${color_dark}, 0.32)`,
  },
];
