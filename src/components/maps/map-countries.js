import React from "react";
import "leaflet/dist/leaflet.css";
import { Map } from "react-leaflet";
import { Spinners } from "../../commons";
import { makeStyles } from "@material-ui/core";
import { MapCircleMarker, MapTileLayer } from ".";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
}));

function MapCountries() {
  const classes = useStyles();
  const data_countries = useSelector((state) => state.countries);
  const isLoading = data_countries.loading;
  const countries = data_countries.countries;

  let unit = 8;
  let minLat = unit * 2;
  let maxLat = unit * 4;
  let minLong = unit * -2;
  let maxLong = unit * 17.5;

  let centerLat = (minLat + maxLat) / 2;
  let centerLong = (minLong + maxLong) / 2;

  let distanceLat = maxLat - minLat;
  let distanceLong = maxLong - minLong;

  let bufferLat = distanceLat * 0.05;
  let bufferLong = distanceLong * 0.05;

  const CircleList = countries.map((item, index) => {
    return (
      <MapCircleMarker
        key={index}
        center={[item.countryInfo.lat, item.countryInfo.long]}
        radius={10 * Math.log(item.cases / 1000)}
        name={item.country}
        cases={item.cases}
        recovered={item.recovered}
        deaths={item.deaths}
      />
    );
  });

  return (
    <Map
      zoom={1}
      minZoom={2}
      maxZoom={4}
      zoomControl={false}
      center={[centerLat, centerLong]}
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

export default MapCountries;
