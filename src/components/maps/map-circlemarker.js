import React from "react";
import { makeStyles, Typography, useTheme } from "@material-ui/core";
import { CircleMarker, Tooltip } from "react-leaflet";
import { useTranslation, Trans } from "react-i18next";
import { FormatNumber } from "../../utilities";

const useStyles = makeStyles((theme) => ({
  // CIRCLE
  circle: {
    // strokeWidth: 0,
    // fill: theme.palette.error.main,
    animation: "$animation 2400ms linear infinite",
  },

  // TOOLTIP
  tooltip: {
    borderColor: "transparent",
    padding: theme.spacing(0.5),
    boxShadow: theme.shadows[25].card,
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    "&:before ": {
      borderRightColor: theme.palette.background.default,
    },
    "& .tooltip-label-cases": {
      color: theme.palette.warning.main,
      fontWeight: theme.typography.subtitle2.fontWeight,
    },
    "& .tooltip-label-recovered": {
      color: theme.palette.success.main,
      fontWeight: theme.typography.subtitle2.fontWeight,
    },
    "& .tooltip-label-deaths": {
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.subtitle2.fontWeight,
    },
  },

  // ANIMATION
  "@keyframes animation": {
    "0%": {
      fillOpacity: 0.08,
    },
    "50%": {
      fillOpacity: 0.48,
    },
    "100%": {
      fillOpacity: 0.08,
    },
  },
}));

function MapCircleMarker({ center, radius, name, cases, recovered, deaths }) {
  useTranslation();
  const theme = useTheme();
  const classes = useStyles();

  return (
    <CircleMarker
      stroke={false}
      center={center}
      radius={radius}
      className={classes.circle}
      color={theme.palette.error.main}
    >
      <Tooltip direction="right" offset={[-4, -2]} className={classes.tooltip}>
        <Typography variant="subtitle2">{name}</Typography>

        <Typography
          variant="caption"
          component="div"
          className="tooltip-label-cases"
        >
          <Trans i18nKey="label.cases" />
          :&nbsp;
          {FormatNumber(cases)}
        </Typography>

        <Typography
          variant="caption"
          component="div"
          className="tooltip-label-recovered"
        >
          <Trans i18nKey="label.recovered" />
          :&nbsp;
          {FormatNumber(recovered)}
        </Typography>

        <Typography
          variant="caption"
          component="div"
          className="tooltip-label-deaths"
        >
          <Trans i18nKey="label.deaths" />
          :&nbsp;
          {FormatNumber(deaths)}
        </Typography>
      </Tooltip>
    </CircleMarker>
  );
}

export default MapCircleMarker;
