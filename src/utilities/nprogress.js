import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import nprogress from "nprogress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@global": {
    "#nprogress": {
      "& .bar": {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "3px",
        zIndex: theme.zIndex.snackbar,
        background: theme.palette.primary.main
      },
      "& .peg": {
        display: "block",
        position: "absolute",
        right: 0,
        width: "100px",
        height: "100%",
        boxShadow: `0 0 3px ${theme.palette.primary.main}`,
        transform: "rotate(4deg) translate(0px, -8px)"
      }
    }
  }
}));

const Nprogress = props => {
  useStyles();

  useEffect(() => {
    // As componentDidMount
    nprogress.done();
    // As componentWillUnmount
    return () => {
      nprogress.start();
      nprogress.configure({
        easing: "ease",
        speed: 500,
        showSpinner: false
      });
    };
  }, []);

  return <Route {...props} />;
};

export default Nprogress;
