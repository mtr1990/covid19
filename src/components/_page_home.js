import { Panels } from "./panels";
import { Header } from "../commons";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Box, makeStyles } from "@material-ui/core";
import { LeftBar, MiddleMain, RightBar } from "./layouts";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  getNews,
  getStatus,
  getReports,
  getCountries,
  getProvinces,
} from "../redux";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    padding: `0 ${theme.spacing(2)}px`,
    marginBottom: theme.spacing(20),
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      marginBottom: 0,
    },
  },
}));

function HomePage() {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getProvinces());
    dispatch(getNews());
    dispatch(getStatus());
    dispatch(getReports());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{t("heading.title")}</title>
        </Helmet>
      </HelmetProvider>

      {/********** COMMONS ***********/}
      <Header />
      <Panels />
      <Box className={classes.container}>
        {/********** MIDDLE BAR ***********/}
        <MiddleMain />

        {/********** LEFT BAR ***********/}
        <LeftBar />

        {/********** RIGHT BAR ***********/}
        <RightBar />
      </Box>
    </>
  );
}

export default HomePage;
