const font_primary = "Fira Sans, Helvetica, Arial, sans-serif";
// const font_secondary = "Merriweather, Helvetica, Arial, sans-serif";

const body_line_height = 1.5;
const heading_line_height = "normal";

export const muiTypography = {
  fontFamily: font_primary,

  h1: {
    lineHeight: heading_line_height,
    fontWeight: 400,
  },
  h2: {
    lineHeight: heading_line_height,
    fontWeight: 400,
  },
  h3: { lineHeight: heading_line_height, fontWeight: 500 },
  h4: { lineHeight: heading_line_height, fontWeight: 500 },
  h5: { lineHeight: heading_line_height, fontWeight: 500 },
  h6: { lineHeight: heading_line_height, fontWeight: 500 },

  subtitle1: { fontWeight: 500 },
  subtitle2: { fontWeight: 500 },

  body1: {
    fontWeight: 400,
    lineHeight: body_line_height,
  },
  body2: {
    fontWeight: 400,
    lineHeight: body_line_height,
  },

  button: { fontSize: 14, fontWeight: 700, textTransform: "uppercase" },
  caption: { fontWeight: 400, fontSize: 13 },
  overline: { fontWeight: 400 },
};
