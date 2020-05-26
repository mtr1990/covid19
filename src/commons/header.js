import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Logo, BtnShare, BtnLang, BtnDarkMode } from ".";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: theme.spacing(10),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    justifyContent: "space-between",
    boxShadow: theme.shadows[25].card,
    backgroundColor: theme.palette.background.card,
    "& .logo": {
      transform: "scale(0.88)",
      transformOrigin: "left",
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Logo />
      <Box flexGrow={1} />
      <BtnShare />
      <BtnLang />
      <BtnDarkMode />
    </Box>
  );
}

export default Header;
