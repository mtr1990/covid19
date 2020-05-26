import React from "react";
import { Box, makeStyles, Typography, Link } from "@material-ui/core";
import { dateFormatLang } from "../../utilities";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(2),
  },
  thumbnail: {
    objectFit: "cover",
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: theme.shape.borderRadius,
  },
  content: {
    width: `calc(100% - ${theme.spacing(6)}px)`,
    paddingLeft: theme.spacing(2),
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
  },
}));

function NewsItem({ item }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img
        src={item.image}
        alt={`thumbnail ${item.image}`}
        className={classes.thumbnail}
      />
      {/********** CONTENT ***********/}
      <Box className={classes.content}>
        <Typography variant="subtitle2" component="h6">
          <Link
            href={item.url}
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </Link>
        </Typography>

        {/********** BOTTOM ***********/}
        <Box className={classes.bottom}>
          <Typography variant="caption" color="textSecondary">
            {item.source}
          </Typography>

          <Typography variant="caption" color="textSecondary">
            {dateFormatLang(item.time).fromNow()}

            {/* <Moment
              locale={checkLang ? "vi" : "en"}
              fromNow
              parse="YYYY-MM-DD HH:mm:ss"
            >
              {item.time}
            </Moment> */}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default NewsItem;
