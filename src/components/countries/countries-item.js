import React from "react";
import { Box, makeStyles, Typography, fade } from "@material-ui/core";
import { MoreBadges } from "../../@material-ui-custom";
import { FormatNumber } from "../../utilities";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 1,
    position: "relative",
    padding: `${theme.spacing(1.2)}px ${theme.spacing(2)}px`,
    backgroundColor: fade(theme.palette.contrast.medium, 0.12),
  },
  flag: {
    objectFit: "cover",
    overflow: "hidden",
    borderRadius: "50%",
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    marginRight: theme.spacing(1),
  },
  index: {
    top: 0,
    bottom: 0,
    margin: "auto",
    display: "flex",
    borderRadius: "50%",
    position: "absolute",
    alignItems: "center",
    right: theme.spacing(1),
    width: theme.spacing(4),
    justifyContent: "center",
    height: theme.spacing(4),
    marginRight: theme.spacing(1),
    fontSize: theme.typography.caption.fontSize,
    backgroundColor: theme.palette.background.card,
    fontWeight: theme.typography.subtitle2.fontWeight,
    border: `${theme.palette.contrast.lower} solid 1px`,
  },
}));

function CountriesItem({ item, index, isLoading }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.index}>{index + 1}</Box>
      <Box display="flex" alignItems="center">
        {isLoading ? (
          <Skeleton variant="rect" className={classes.flag} />
        ) : (
          <>
            <img
              src={item.countryInfo.flag}
              alt={item.countryInfo.flag}
              className={classes.flag}
            />
            <Typography variant="subtitle2">{item.country}</Typography>
          </>
        )}
      </Box>

      <Box display="flex" mt={1.2} mb={0.5}>
        <MoreBadges mr={0.5} status="warning">
          {FormatNumber(item.cases)}
        </MoreBadges>
        <MoreBadges status="success" mr={0.5}>
          {FormatNumber(item.recovered)}
        </MoreBadges>
        <MoreBadges status="basic">{FormatNumber(item.deaths)}</MoreBadges>
      </Box>

      <Box>
        <Typography variant="caption">Today</Typography>
        <Typography variant="caption" color="textSecondary">
          ・Cases {item.todayCases}・Deaths {item.todayDeaths}
        </Typography>
      </Box>
    </Box>
  );
}

export default CountriesItem;
