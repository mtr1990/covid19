import React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import PropTypes from "prop-types";
import { Box, Button, Typography, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  default: {
    backgroundColor: theme.palette.background.default,
  },
  conmons: { boxShadow: theme.shadows[10] },
}));

// CONTAINER
export const SnackContainer = (props) => {
  return (
    <SnackbarProvider
      autoHideDuration={5000}
      maxSnack={3}
      preventDuplicate
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {props.children}
    </SnackbarProvider>
  );
};

// STATUS
export const SnackStatus = (enqueueSnackbar, { ...args }) => {
  return enqueueSnackbar(args.message, {
    preventDuplicate: false,
    content: (key, message) => (
      <SnackContentStatus
        id={key}
        message={message}
        variant={args.variant}
        close={args.close}
      />
    ),
  });
};

// ACTION
export const SnackAction = (enqueueSnackbar, { ...args }) => {
  return enqueueSnackbar(args.message, {
    autoHideDuration: null,
    preventDuplicate: true,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
    content: (key, message) => (
      <SnackContentAction
        id={key}
        message={message}
        funC={args.funC}
        btnAction={args.btnAction}
      />
    ),
  });
};

// CONTENT
const SnackContentStatus = React.forwardRef((props, ref) => {
  const { closeSnackbar } = useSnackbar();
  const classes = useStyles();

  return (
    <Alert
      ref={ref}
      severity={props.variant}
      onClose={props.close !== false ? () => closeSnackbar(props.id) : null}
      variant="filled"
      className={classes.conmons}
    >
      <Box minWidth={200} maxWidth={240}>
        {props.message}
      </Box>
    </Alert>
  );
});

const SnackContentAction = React.forwardRef((props, ref) => {
  const { closeSnackbar } = useSnackbar();
  const classes = useStyles();

  const handleClick = () => {
    props.funC();
    closeSnackbar(props.id);
  };

  return (
    <Alert
      ref={ref}
      icon={false}
      className={`${classes.default} ${classes.conmons}`}
    >
      <Box display="flex" alignItems="center">
        <Typography variant="subtitle1" color="textPrimary">
          {props.message}
        </Typography>

        <Box ml={4} mr={2}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleClick}
          >
            {props.btnAction}
          </Button>
        </Box>

        <Button
          color="primary"
          size="small"
          onClick={() => closeSnackbar(props.id)}
        >
          Cancel
        </Button>
      </Box>
    </Alert>
  );
});

SnackContentStatus.propTypes = {
  id: PropTypes.number.isRequired,
};

SnackContentAction.propTypes = {
  id: PropTypes.number.isRequired,
};
