import React from "react";
import { Typography, Box, makeStyles, useTheme } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import moment from "moment/moment";

import { FormatNumber } from "../../utilities";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Spinners } from "../../commons";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    fill: theme.palette.contrast.higher,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    "& line.recharts-yAxis, & line.recharts-xAxis": {
      stroke: theme.palette.contrast.low,
    },
    "& .recharts-text": {
      fill: theme.palette.contrast.medium,
    },

    "& .recharts-legend-item": {
      display: "inline-flex !important",
      alignItems: "center",
    },

    "& .recharts-legend-item-text": {
      fontWeight: 500,
      fontSize: "13px",
    },
  },

  cartesiangrid: {
    stroke: theme.palette.divider,
    "&:first-child": {
      stroke: "none",
    },
  },

  tooltip: {
    padding: theme.spacing(1),
    boxShadow: theme.shadows[25].card,
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    "& .tooltip-label-cases": {
      color: theme.palette.warning.main,
    },
    "& .tooltip-label-recovered": {
      color: theme.palette.success.main,
    },
    "& .tooltip-label-deaths": {
      color: theme.palette.contrast.medium,
    },
  },
}));

const RechartLine = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const theme = useTheme();
  const data_reports = useSelector((state) => state.reports);
  const isLoading = data_reports.loading;
  const reports = data_reports.reports;

  const data = reports;

  const dateFormatter = (item) =>
    moment(new Date(item).getTime()).format("DD/MM");

  const CustomTooltip = ({ active, payload }) => {
    const classes = useStyles();
    const checkPayload = payload && payload[0] !== "undefined";

    if (active && checkPayload) {
      return (
        <Box className={classes.tooltip}>
          <Typography variant="subtitle2">
            {moment(payload[0].payload.date).format("DD/MM/YYYY")}
          </Typography>

          <Typography
            variant="caption"
            component="div"
            className="tooltip-label-cases"
          >
            {t("label.cases")}
            :&nbsp;
            {payload[0].payload.cases === null
              ? null
              : FormatNumber(payload[0].payload.cases)}
          </Typography>

          <Typography
            variant="caption"
            component="div"
            className="tooltip-label-recovered"
          >
            {t("label.recovered")}
            :&nbsp;
            {payload[0].payload.recovered === null
              ? null
              : FormatNumber(payload[0].payload.recovered)}
          </Typography>

          <Typography
            variant="caption"
            component="div"
            className="tooltip-label-deaths"
          >
            {t("label.deaths")}
            :&nbsp;
            {payload[0].payload.deaths === null
              ? null
              : FormatNumber(payload[0].payload.deaths)}
          </Typography>
        </Box>
      );
    } else return null;
  };

  return (
    <>
      {isLoading ? (
        <Spinners />
      ) : (
        <Box className={classes.root}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <XAxis
                fontSize={12}
                height={20}
                dataKey="date"
                tickFormatter={dateFormatter}
                tickSize={8}
                tickMargin={8}
              />

              <YAxis
                fontSize={12}
                width={56}
                orientation="right"
                type="number"
                domain={["dataMin", "dataMax"]}
                tickLine={false}
                tickSize={0}
                tickMargin={8}
                tickFormatter={(tick) => FormatNumber(tick)}
              />

              <CartesianGrid
                className={classes.cartesiangrid}
                vertical={false}
                strokeDasharray="3 3"
              />

              <Tooltip content={<CustomTooltip />} />

              <Legend
                iconSize={8}
                align="left"
                verticalAlign="top"
                height={36}
                className="test"
              />

              <Line
                dot={false}
                dataKey="cases"
                strokeWidth={2}
                type="stepBefore"
                legendType="circle"
                name={t("label.cases")}
                isAnimationActive={false}
                stroke={theme.palette.warning.main}
                activeDot={{ strokeWidth: 0, r: 6 }}
              />

              <Line
                dot={false}
                strokeWidth={2}
                type="stepBefore"
                legendType="cross"
                dataKey="recovered"
                isAnimationActive={false}
                name={t("label.recovered")}
                stroke={theme.palette.success.main}
                activeDot={{ strokeWidth: 0, r: 4 }}
              />

              <Line
                dot={false}
                strokeWidth={2}
                dataKey="deaths"
                type="stepBefore"
                legendType="cross"
                name={t("label.deaths")}
                isAnimationActive={false}
                activeDot={{ strokeWidth: 0, r: 4 }}
                stroke={theme.palette.contrast.medium}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      )}
    </>
  );
};

export default RechartLine;
