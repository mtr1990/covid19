import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  badges: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    lineHeight: "normal",
    padding: "2px 6px",
    minWidth: theme.spacing(3),
    borderRadius: theme.spacing(2),
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.subtitle2.fontWeight,
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
  },
  success: {
    backgroundColor: theme.palette.success.main,
  },
  basic: {
    color: theme.palette.contrast.medium,
    backgroundColor: theme.palette.contrast.low,
  },
}));

const MoreBadges = (props) => {
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
    case "error":
      status = classes.error;
      break;
    default:
      status = classes.basic;
  }

  return (
    <Box className={`${classes.badges} ${status}`} {...props}>
      {props.children}
    </Box>
  );
};

export default MoreBadges;
