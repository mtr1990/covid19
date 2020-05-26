import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { ChartPie, ChartLine } from "../charts";
import { Maps } from "../maps";

const useStyles = makeStyles((theme) => ({
  middle_root: {
    [theme.breakpoints.up("lg")]: {
      order: 2,
      flexGrow: 1,
      display: "flex",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      height: `calc(100vh - ${theme.spacing(26)}px)`,
    },
  },
  // MAPS
  maps: {
    height: "480px",
    overflow: "hidden",
    boxShadow: theme.shadows[25].card,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("lg")]: {
      height: "auto",
      marginLeft: theme.spacing(1),
      width: "50%",
    },
  },
  // CHARTS
  charts: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      marginBottom: 0,
      flexDirection: "column",
      marginRight: theme.spacing(1),
    },
  },
  chart: {
    height: "480px",
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.background.card,
    padding: theme.spacing(1),
    boxShadow: theme.shadows[25].card,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
    "&:first-child": {
      [theme.breakpoints.up("md")]: {
        marginRight: theme.spacing(1),
      },
      [theme.breakpoints.up("lg")]: {
        marginRight: 0,
        marginBottom: theme.spacing(1),
      },
    },
    "&:last-child": {
      margin: `${theme.spacing(2)}px 0`,
      [theme.breakpoints.up("md")]: {
        margin: 0,
        marginLeft: theme.spacing(1),
      },
      [theme.breakpoints.up("lg")]: {
        marginLeft: 0,
        marginTop: theme.spacing(1),
      },
    },
  },
}));

function MiddleMain({ report }) {
  const classes = useStyles();

  return (
    <Box className={classes.middle_root}>
      <Box className={classes.charts}>
        <Box className={classes.chart}>
          <ChartPie />
        </Box>

        <Box className={classes.chart}>
          <ChartLine />
        </Box>
      </Box>

      <Box className={classes.maps}>
        <Maps />
      </Box>
    </Box>
  );
}

export default MiddleMain;
