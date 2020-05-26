import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useTranslation, Trans } from "react-i18next";
import { useSelector } from "react-redux";
import { dateFormatLang } from "../../utilities";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: theme.spacing(42),
  },
}));

const Jumbotron = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const status = useSelector((state) => state.status.status);

  return (
    <Box className={classes.root}>
      <Typography variant="h5">COVID-19</Typography>

      <Typography variant="caption" color="textSecondary">
        <Trans i18nKey="descriptions.jumbotron1" />
        <span>
          &nbsp;{dateFormatLang(status.updated).format("HH:mm DD/MM/YYYY")}
          &nbsp;({dateFormatLang(status.updated).fromNow()})
        </span>
        <br />
        {t("descriptions.jumbotron2")}
      </Typography>
    </Box>
  );
};

export default Jumbotron;
