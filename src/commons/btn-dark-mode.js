import React from "react";
import useDarkMode from "use-dark-mode";
import { Checkbox, Box, makeStyles } from "@material-ui/core";
import { HighlightRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "fixed",
    // right: theme.spacing(3),
    // bottom: theme.spacing(3),
    // zIndex: theme.zIndex.modal,
    // [theme.breakpoints.up("lg")]: {
    //   left: theme.spacing(6),
    //   bottom: theme.spacing(6),
    // },
  },
  checkbox: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

function BtnDarkMode() {
  const classes = useStyles();
  const darkMode = useDarkMode(false);

  return (
    <Box className={classes.root}>
      <Checkbox
        color={darkMode.value ? "primary" : "default"}
        icon={<HighlightRounded />}
        checkedIcon={<HighlightRounded />}
        className={classes.checkbox}
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
    </Box>
  );
}

export default BtnDarkMode;
