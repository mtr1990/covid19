import _ from "lodash";
import React from "react";
import CompareBlock from "./compare-block";
import { Box, makeStyles, fade } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  block: {
    flexGrow: 1,
    display: "flex",
    padding: theme.spacing(1.2),
    minWidth: theme.spacing(20),
    borderRadius: theme.shape.borderRadius,
    margin: `${theme.spacing(2)}px 0`,
    "& .block-total": {
      minWidth: theme.spacing(14),
    },
    "& .block-today": {
      flexGrow: 1,
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      [theme.breakpoints.up("md")]: {
        minWidth: theme.spacing(16),
      },
    },
  },
  block_cases: {
    color: theme.palette.warning.main,
    backgroundColor: fade(theme.palette.warning.main, 0.12),
    "& .block-today": {
      border: `${theme.palette.warning.main} dashed 1px`,
    },
  },
  block_recovered: {
    color: theme.palette.success.main,
    backgroundColor: fade(theme.palette.success.main, 0.12),
    [theme.breakpoints.up("md")]: {
      margin: `0 ${theme.spacing(2)}px`,
    },
    "& .block-today": {
      border: `${theme.palette.success.main} dashed 1px`,
    },
  },
  block_deaths: {
    color: theme.palette.contrast.medium,
    backgroundColor: fade(theme.palette.contrast.medium, 0.12),
    "& .block-today": {
      border: `${theme.palette.contrast.medium} dashed 1px`,
    },
  },
}));

function Compare() {
  const classes = useStyles();
  const status = useSelector((state) => state.status.status);
  const reports = useSelector((state) => state.reports.reports);

  // GET ALL
  let all_cases = status.cases;
  let all_recovered = status.recovered;
  let all_deaths = status.deaths;

  // GET ITEM
  const lastItem = _.last(reports);
  const nextLastItem = _.nth(reports, -2);

  // GET ITEM CONFIRMED
  const casesLast = lastItem && lastItem.cases;
  const casesNextLast = nextLastItem && nextLastItem.cases;
  const resultCase = _.subtract(casesLast, casesNextLast);
  const percentCase = ((resultCase / all_cases) * 100).toFixed(2);

  // GET ITEM RECOVERED
  const recoveredLast = lastItem && lastItem.recovered;
  const recoveredNextLast = nextLastItem && nextLastItem.recovered;
  const resultRecovered = _.subtract(recoveredLast, recoveredNextLast);
  const percentRecovered = ((resultRecovered / all_recovered) * 100).toFixed(2);

  // GET ITEM DEATHS
  const deathsLast = lastItem && lastItem.deaths;
  const deathsNextLast = nextLastItem && nextLastItem.deaths;
  const resultDeaths = _.subtract(deathsLast, deathsNextLast);
  const percentDeaths = ((resultDeaths / all_deaths) * 100).toFixed(2);

  return (
    <Box className={classes.root}>
      {/********** BLOCK ***********/}
      <CompareBlock
        className={`${classes.block} ${classes.block_cases}`}
        label={`cases`}
        total={all_cases}
        result={resultCase}
        percent={percentCase}
      />

      {/********** BLOCK ***********/}
      <CompareBlock
        className={`${classes.block} ${classes.block_recovered}`}
        label={`recovered`}
        total={all_recovered}
        result={resultRecovered}
        percent={percentRecovered}
      />

      {/********** BLOCK ***********/}
      <CompareBlock
        className={`${classes.block} ${classes.block_deaths}`}
        label={`deaths`}
        total={all_deaths}
        result={resultDeaths}
        percent={percentDeaths}
      />
    </Box>
  );
}

export default Compare;
