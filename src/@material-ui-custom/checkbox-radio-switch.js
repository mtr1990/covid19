import React from "react";
import { Checkbox, Radio, Switch, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // CHECKBOX - RADIO
  info: { color: theme.palette.info.main },
  success: { color: theme.palette.success.main },
  warning: { color: theme.palette.warning.main },
  error: { color: theme.palette.error.main },

  // SWITCH
  switch_info: {
    "&$checked": {
      color: theme.palette.info.main,
      "& + $track": {
        backgroundColor: theme.palette.info.main,
      },
    },
  },
  switch_success: {
    "&$checked": {
      color: theme.palette.success.main,
      "& + $track": {
        backgroundColor: theme.palette.success.main,
      },
    },
  },
  switch_warning: {
    "&$checked": {
      color: theme.palette.warning.main,
      "& + $track": {
        backgroundColor: theme.palette.warning.main,
      },
    },
  },
  switch_error: {
    "&$checked": {
      color: theme.palette.error.main,
      "& + $track": {
        backgroundColor: theme.palette.error.main,
      },
    },
  },
  checked: {},
  track: {},
  disabled: {},
}));

// CHECKBOX
export const MoreCheckbox = (props) => {
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

  return <Checkbox classes={{ checked: status }} color="default" {...props} />;
};

// RADIO
export const MoreRadio = (props) => {
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

  return <Radio classes={{ checked: status }} color="default" {...props} />;
};

// SWITCH
export const MoreSwitch = (props) => {
  const classes = useStyles();

  let status;
  switch (props.status) {
    case "info":
      status = classes.switch_info;
      break;
    case "success":
      status = classes.switch_success;
      break;
    case "warning":
      status = classes.switch_warning;
      break;
    case "error":
      status = classes.switch_error;
      break;
    default:
      status = null;
  }

  return (
    <Switch
      classes={{
        switchBase: status,
        checked: classes.checked,
        track: classes.track,
        disabled: classes.disabled,
      }}
      color="default"
      {...props}
    />
  );
};
