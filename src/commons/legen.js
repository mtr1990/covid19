import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { useTranslation, Trans } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  badges: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    marginRight: theme.spacing(0.5),
    "&.warning": {
      backgroundColor: theme.palette.warning.main,
    },
    "&.success": {
      backgroundColor: theme.palette.success.main,
    },
    "&.basic": {
      backgroundColor: theme.palette.contrast.low,
    },
  },
}));

function Legen() {
  useTranslation();
  const classes = useStyles();

  return (
    <>
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box className={`${classes.badges} warning`} />
          <Typography
            component="span"
            variant="caption"
            className={classes.legen}
          >
            <Trans i18nKey="label.cases" />
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mx={2}>
          <Box className={`${classes.badges} success`} />
          <Typography
            component="span"
            variant="caption"
            className={classes.legen}
          >
            <Trans i18nKey="label.recovered" />
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Box className={`${classes.badges} basic`} />
          <Typography
            component="span"
            variant="caption"
            className={classes.legen}
          >
            <Trans i18nKey="label.deaths" />
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Legen;
