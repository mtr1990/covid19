import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { NewsList } from "../news";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  rightbar_root: {
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    boxShadow: theme.shadows[25].card,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.card,
    [theme.breakpoints.up("lg")]: {
      order: 2,
      width: theme.spacing(40),
      height: `calc(100vh - ${theme.spacing(26)}px)`,
    },
  },
  rightbar_panel: {
    padding: theme.spacing(2),
  },
  rightbar_list: {
    flexGrow: 1,
    position: "relative",
    overflowY: "auto",
  },
}));

function RightBar() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.rightbar_root}>
      <Box className={classes.rightbar_panel}>
        <Typography variant="h6">{t("heading.news")}</Typography>
      </Box>

      <Box className={classes.rightbar_list}>
        <NewsList />
      </Box>
    </Box>
  );
}
export default RightBar;
