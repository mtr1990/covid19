import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  Box,
  Tab,
  Tabs,
  fade,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Legen } from "../../commons";
import { CountriesList, SearchCountries } from "../countries";
import { ProvincesList, SearchProvinces } from "../provinces";

import { useSelector } from "react-redux";

let height_mobile = "72vh";
const useStyles = makeStyles((theme) => ({
  leftbar_root: {
    overflow: "hidden",
    height: height_mobile,
    boxShadow: theme.shadows[25].card,
    margin: `${theme.spacing(4)}px 0`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.card,
    [theme.breakpoints.up("lg")]: {
      order: 1,
      margin: 0,
      width: theme.spacing(40),
      height: `calc(100vh - ${theme.spacing(26)}px)`,
    },
  },
  leftbar_block: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    height: `calc(${height_mobile} - ${theme.spacing(10)}px)`,
    [theme.breakpoints.up("lg")]: {
      height: `calc(100vh - ${theme.spacing(36)}px)`,
    },
  },
  leftbar_list: {
    flexGrow: 1,
    overflowY: "auto",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
  },

  // TABS
  leftbar_tabs: {
    alignItems: "flex-end",
  },
  leftbar_flexContainer: {
    justifyContent: "center",
    padding: theme.spacing(0.5),
    margin: `0 ${theme.spacing(2)}px`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.contrast.medium, 0.12),
  },
  leftbar_tabs_indicator: {
    height: 0,
  },
  leftbar_tab: {
    padding: 0,
    height: theme.spacing(4),
    minHeight: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.caption.fontSize,
    minWidth: `calc(50% - ${theme.spacing(0.25)}px)`,
    fontWeight: theme.typography.subtitle2.fontWeight,
  },
  leftbar_tab_selected: {
    boxShadow: theme.shadows[25].card,
    backgroundColor: theme.palette.background.card,
  },
  leftbar_tab_wrapper: {
    flexDirection: "row",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: theme.spacing(1),
    },
  },
}));

function LeftBar() {
  const { t } = useTranslation();
  const [tab, setTab] = useState(0);
  const classes = useStyles();

  const countries = useSelector((state) => state.countries.countries);
  const province = useSelector((state) => state.provinces.provinces);

  const handleChangeTabs = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box className={classes.leftbar_root}>
      <Tabs
        value={tab}
        onChange={handleChangeTabs}
        aria-label="simple tabs example"
        classes={{
          root: classes.leftbar_tabs,
          indicator: classes.leftbar_tabs_indicator,
          flexContainer: classes.leftbar_flexContainer,
        }}
      >
        <Tab
          classes={{
            root: classes.leftbar_tab,
            selected: classes.leftbar_tab_selected,
            wrapper: classes.leftbar_tab_wrapper,
          }}
          label={t("action.local")}
          {...a11yProps(0)}
        />
        <Tab
          classes={{
            root: classes.leftbar_tab,
            selected: classes.leftbar_tab_selected,
            wrapper: classes.leftbar_tab_wrapper,
          }}
          label={t("action.global")}
          {...a11yProps(1)}
        />
      </Tabs>

      {/********** PROVINCES ***********/}
      <TabPanel value={tab} index={0}>
        <Box className={classes.leftbar_block}>
          <Typography variant="subtitle1" component="h6">
            {t("heading.provinces", { length: province.length })}
          </Typography>
          <Legen />

          <SearchProvinces />

          <Box className={classes.leftbar_list}>
            <ProvincesList />
          </Box>
        </Box>
      </TabPanel>

      {/********** COUNTRIES ***********/}
      <TabPanel value={tab} index={1}>
        <Box className={classes.leftbar_block}>
          <Typography variant="subtitle1" component="h6">
            {t("heading.country", { length: countries.length })}
          </Typography>
          <Legen />

          <SearchCountries />

          <Box className={classes.leftbar_list}>
            <CountriesList />
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}

export default LeftBar;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
