import React from "react";
import { fade, Button, IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // BASIC
  basic: {
    color: theme.palette.contrast.high,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.contrast.high,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:disabled": {
      color: theme.palette.contrast.higher,
    },
  },
  // INFO
  info: {
    color: theme.palette.info.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.info.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:disabled": {
      color: theme.palette.info.main,
    },
  },
  // SUCCESS
  success: {
    color: theme.palette.success.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.success.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:disabled": {
      color: theme.palette.success.main,
    },
  },
  // WARNING
  warning: {
    color: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.warning.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:disabled": {
      color: theme.palette.warning.main,
    },
  },
  // ERROR
  error: {
    color: theme.palette.error.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.error.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:disabled": {
      color: theme.palette.error.main,
    },
  },
}));

// BTN TEXT
export const MoreBtnText = (props) => {
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
    <Button className={status} {...props}>
      {props.children}
    </Button>
  );
};

// ICON BUTTON
export const MoreIconButton = (props) => {
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
      status = null;
  }

  return (
    <IconButton className={status} {...props}>
      {props.children}
    </IconButton>
  );
};
