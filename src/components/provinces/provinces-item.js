import React from "react";
import { Box, makeStyles, fade, Typography } from "@material-ui/core";
import { MoreBadges } from "../../@material-ui-custom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 1,
    position: "relative",
    padding: `${theme.spacing(1.2)}px ${theme.spacing(2)}px`,
    backgroundColor: fade(theme.palette.contrast.medium, 0.12),
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

const ProvincesItem = ({ item, index }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.index}>{index + 1}</Box>

      <Typography variant="subtitle2">{item.city}</Typography>

      <Box display="flex" mt={0.5}>
        <MoreBadges status="warning" mr={0.5}>
          {item.confirmed}
        </MoreBadges>

        <MoreBadges status="success">{item.recovered}</MoreBadges>
      </Box>
    </Box>
  );
};

export default ProvincesItem;
