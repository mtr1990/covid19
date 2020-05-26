import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import { FacebookShareButton } from "react-share";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
}));

const BtnShare = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <FacebookShareButton url="https://coronafull.com">
      <Button
        size="small"
        color="primary"
        variant="contained"
        classes={{ root: classes.root }}
        startIcon={<FacebookIcon />}
        {...props}
      >
        {t("action.share")}
      </Button>
    </FacebookShareButton>
  );
};

export default BtnShare;
