import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, Tabs, Tab, Box, fade } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { MapCountries, MapProvinces } from ".";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "red",
  },
  box: {
    height: "100%",
  },
  // TABS
  map_tabs: {
    right: 0,
    zIndex: 999,
    position: "absolute",
    alignItems: "flex-end",
  },
  map_flexContainer: {
    justifyContent: "center",
    padding: theme.spacing(0.5),
    margin: `0 ${theme.spacing(2)}px`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.contrast.medium, 0.12),
  },
  map_tabs_indicator: {
    height: 0,
  },
  map_tab: {
    padding: 0,
    minWidth: "100px",
    height: theme.spacing(4),
    minHeight: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.subtitle2.fontWeight,
  },
  map_tab_selected: {
    boxShadow: theme.shadows[25].card,
    backgroundColor: theme.palette.background.default,
  },
  map_tab_wrapper: {
    flexDirection: "row",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: theme.spacing(1),
    },
  },
}));

function Maps({ countries, provinces, isLoading }) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        classes={{
          root: classes.map_tabs,
          indicator: classes.map_tabs_indicator,
          flexContainer: classes.map_flexContainer,
        }}
      >
        <Tab
          classes={{
            root: classes.map_tab,
            selected: classes.map_tab_selected,
            wrapper: classes.map_tab_wrapper,
          }}
          label={t("action.local")}
          {...a11yProps(0)}
        />
        <Tab
          classes={{
            root: classes.map_tab,
            selected: classes.map_tab_selected,
            wrapper: classes.map_tab_wrapper,
          }}
          label={t("action.global")}
          {...a11yProps(1)}
        />
      </Tabs>

      <TabPanel value={value} index={0} className={classes.box}>
        <MapProvinces />
      </TabPanel>

      <TabPanel value={value} index={1} className={classes.box}>
        <MapCountries />
      </TabPanel>
    </Box>
  );
}

export default Maps;

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
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
