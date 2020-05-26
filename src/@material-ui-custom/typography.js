import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  info: { color: theme.palette.info.main },
  success: { color: theme.palette.success.main },
  warning: { color: theme.palette.warning.main },
}));

export const MoreTypography = (props) => {
  const classes = useStyles();

  let status;
  switch (props.status) {
    case "info":
      status = classes.info;
      break;
    case "success":
      status = classes.success;
      break;
    case "warning":
      status = classes.warning;
      break;
    default:
      status = null;
  }

  return (
    <Typography className={status} {...props}>
      {props.children}
    </Typography>
  );
};
