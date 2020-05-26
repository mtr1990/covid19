import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  makeStyles,
  Breadcrumbs,
  Container,
  Box,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { path_DASHBOARD } from "../configs";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "110px",
    width: "100%",
    padding: `${theme.spacing(2)}px 0`,
    "& a": {
      display: "flex",
      alignItems: "center",
      color: theme.palette.text.primary,
      "&:hover": {
        textDecoration: "underline",
      },
    },
    "& a,p": {
      fontSize: theme.typography.subtitle2.fontSize,
    },
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const MoreBreadcrumbs = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Breadcrumbs separator="-" aria-label="breadcrumb">
          <Link color="inherit" to={path_DASHBOARD.root}>
            <Home className={classes.icon} />
            Home
          </Link>
          {props.children}
          <Typography color="textSecondary"> {props.current}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default MoreBreadcrumbs;
