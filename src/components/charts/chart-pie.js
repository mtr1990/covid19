import React from "react";
import { makeStyles, Box, useTheme } from "@material-ui/core";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useTranslation, Trans } from "react-i18next";
import { FormatNumber } from "../../utilities";
import { useSelector } from "react-redux";
import { Spinners } from "../../commons";

const useStyles = makeStyles((theme) => ({
  // root
  root: {
    height: "100%",
    fill: theme.palette.contrast.higher,
    overflowY: "auto",
    "& .pie-heading": {
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.fontWeightBold,
    },
    "& .pie-subheading": {
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& .pie-label": {
      fontSize: theme.typography.subtitle2.fontSize,
      fontWeight: theme.typography.subtitle2.fontWeight,
    },
    "& .pie-sublabel": {
      fontSize: theme.typography.caption.fontSize,
      fill: theme.palette.contrast.medium,
    },
    "& .pie-container": {
      minWidth: "560px",
    },
  },
}));

function ChartPie() {
  useTranslation();
  const theme = useTheme();
  const classes = useStyles();
  const data_status = useSelector((state) => state.status);
  const isLoading = data_status.loading;
  const status = data_status.status;

  const all_cases = status.cases;
  const all_deaths = status.deaths;
  const all_recovered = status.recovered;
  const all_confirming = all_cases - (all_deaths + all_recovered);

  const label_confirming = <Trans i18nKey="label.confirming" />;
  const label_deaths = <Trans i18nKey="label.deaths" />;
  const label_recovered = <Trans i18nKey="label.recovered" />;

  const COLORS = [
    theme.palette.warning.main,
    theme.palette.contrast.medium,
    theme.palette.success.main,
  ];
  const data = [
    {
      name: label_confirming,
      value: all_confirming,
    },
    { name: label_deaths, value: all_deaths },
    { name: label_recovered, value: all_recovered },
  ];

  const renderCustomizedLabel = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, outerRadius, fill, percent, index } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
    return (
      <g>
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={3} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill={COLORS[index % COLORS.length]}
          className="pie-label"
        >
          {data[index].name}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          className="pie-sublabel"
        >
          {FormatNumber(data[index].value)} ({(percent * 100).toFixed(2)}%)
        </text>
      </g>
    );
  };

  return (
    <>
      {isLoading ? (
        <Spinners />
      ) : (
        <Box className={classes.root}>
          <ResponsiveContainer className="pie-container">
            <PieChart>
              <text
                x="50%"
                y="46%"
                textAnchor="middle"
                className="pie-subheading"
              >
                <Trans i18nKey="label.totalcases" />
              </text>
              <text x="50%" y="54%" textAnchor="middle" className="pie-heading">
                {isNaN(all_cases) ? "0..." : FormatNumber(all_cases)}
              </text>

              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="48%"
                outerRadius="50%"
                startAngle={60}
                endAngle={-300}
                paddingAngle={2}
                dataKey="value"
                Legend
                stroke="none"
                strokeWidth={0}
                className={classes.pie}
                label={renderCustomizedLabel}
                isAnimationActive={false}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>
      )}
    </>
  );
}

export default ChartPie;
// export default React.memo(ChartPie);
