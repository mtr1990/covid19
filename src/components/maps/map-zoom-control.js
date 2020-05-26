import React from "react";
import { makeStyles } from "@material-ui/core";
import { ZoomControl } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ".leaflet-control-zoom": {
      display: "none",
      boxShadow: theme.shadows[2],
    },
    ".leaflet-control-attribution": {
      display: "none",
    },
    ".leaflet-bar a, .leaflet-bar a:hover": {
      width: "26px",
      height: "26px",
      display: "block",
      cursor: "pointer",
      lineHeight: "26px",
      textAlign: "center",
      textDecoration: "none",
      borderColor: "transparent",
      color: theme.palette.contrast.medium,
      backgroundColor: theme.palette.contrast.higher,
      "&:hover": {
        opacity: 0.88,
      },
    },
  },
}));

function MapZoomControl() {
  useStyles();
  return <ZoomControl position="bottomright" />;
}

export default MapZoomControl;
