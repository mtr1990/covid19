import React from "react";
import { makeStyles } from "@material-ui/core";
import { TileLayer } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ".leaflet-control-attribution": {
      display: "none",
    },
  },
}));

function MapTileLayer() {
  useStyles();

  const getMode = localStorage.getItem("darkMode");
  const checkMode = getMode === "false";

  const map_light = `https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png`;
  const map_dark = `https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png`;

  return <TileLayer url={checkMode ? map_light : map_dark} />;
}

export default MapTileLayer;
