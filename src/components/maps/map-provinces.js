import React from "react";
import { Map } from "react-leaflet";
import { makeStyles } from "@material-ui/core";
import { MapCircleMarker, MapTileLayer } from ".";
import { Spinners } from "../../commons";
import { useSelector } from "react-redux";

import "leaflet/dist/leaflet.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
}));

function MapProvinces() {
  const classes = useStyles();
  const data_province = useSelector((state) => state.provinces);
  const isLoading = data_province.loading;
  const provinces = data_province.provinces;

  let unit = 8;
  let minLat = unit * 2;
  let maxLat = unit * 2;

  let minLong = unit * 14;
  let maxLong = unit * 12;

  let centerLat = (minLat + maxLat) / 2;
  let centerLong = (minLong + maxLong) / 2;

  let distanceLat = maxLat - minLat;
  let distanceLong = maxLong - minLong;

  let bufferLat = distanceLat * 0.05;
  let bufferLong = distanceLong * 0.05;

  const CircleList = provinces.map((item, index) => {
    return (
      <MapCircleMarker
        key={index}
        center={[item.lat, item.long]}
        radius={item.confirmed * 0.8}
        name={item.city}
        cases={item.confirmed}
        recovered={item.recovered}
        deaths={item.death}
      />
    );
  });

  return (
    <Map
      zoom={1}
      minZoom={3}
      maxZoom={6}
      zoomControl={false}
      center={[centerLong, centerLat]}
      bounds={[
        [minLat - bufferLat, minLong - bufferLong],
        [maxLat + bufferLat, maxLong + bufferLong],
      ]}
      className={classes.root}
    >
      <MapTileLayer />

      {isLoading ? <Spinners /> : CircleList}
    </Map>
  );
}

export default MapProvinces;
