import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Jumbotron, Compare } from ".";

const useStyles = makeStyles((theme) => ({
  panels_root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      height: theme.spacing(10),
      display: "flex",
      alignItems: "center",
    },
  },
}));

function Panels() {
  const classes = useStyles();

  return (
    <Box className={classes.panels_root}>
      <Jumbotron />
      <Compare />
    </Box>
  );
}

export default Panels;
