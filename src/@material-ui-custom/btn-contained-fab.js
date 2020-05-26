import React from "react";
import { Button, Fab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // BASIC
  basic: {
    color: `${theme.palette.contrast.higher} !important`,
    backgroundColor: theme.palette.contrast.low,
    "&:hover": {
      backgroundColor: theme.palette.contrast.low,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.contrast.low,
      },
    },
    "&:disabled": {
      color: `${theme.palette.contrast.higher} !important`,
      backgroundColor: theme.palette.contrast.low,
    },
  },

  // INFO
  info: {
    color: theme.palette.getContrastText(theme.palette.info.main),
    // color: theme.palette.info.contrastText,
    backgroundColor: theme.palette.info.main,
    "&:hover": {
      backgroundColor: theme.palette.info.dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.info.main,
      },
    },
    "&:disabled": {
      color: theme.palette.info.contrastText,
      backgroundColor: theme.palette.info.main,
    },
  },

  // SUCCESS
  success: {
    color: theme.palette.getContrastText(theme.palette.success.main),
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.success.main,
      },
    },
    "&:disabled": {
      color: theme.palette.success.contrastText,
      backgroundColor: theme.palette.success.main,
    },
  },

  // WARNING
  warning: {
    color: theme.palette.getContrastText(theme.palette.warning.main),
    backgroundColor: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.warning.main,
      },
    },
    "&:disabled": {
      color: theme.palette.warning.contrastText,
      backgroundColor: theme.palette.warning.main,
    },
  },

  // ERROR
  error: {
    color: theme.palette.getContrastText(theme.palette.error.main),
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.error.main,
      },
    },
    "&:disabled": {
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main,
    },
  },
}));

// BTN CONTAINED
export const MoreBtnContained = (props) => {
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
    <Button className={status} variant="contained" {...props}>
      {props.children}
    </Button>
  );
};

// FAB
export const MoreFab = (props) => {
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
    <Fab className={status} {...props}>
      {props.children}
    </Fab>
  );
};
