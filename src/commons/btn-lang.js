import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, Button } from "@material-ui/core";
import { ReactSVG } from "react-svg";
import { iFlagVn, iFlagEn } from "../assets";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "42px !important",
    padding: "7px 7px !important",
    marginLeft: theme.spacing(1),
    "& svg": {
      width: "28px !important",
      height: "20px !important",
    },
  },
}));

const BtnLang = (props) => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getLang = localStorage.getItem("i18nextLng");
  const checkLang = getLang === "vi";

  return (
    <Button
      size="small"
      color={checkLang ? "primary" : "secondary"}
      classes={{ root: classes.root }}
      onClick={() => {
        checkLang ? changeLanguage("en") : changeLanguage("vi");
      }}
      {...props}
    >
      {checkLang ? (
        <ReactSVG src={iFlagVn} className="ic-none" />
      ) : (
        <ReactSVG src={iFlagEn} className="ic-none" />
      )}
    </Button>
  );
};
export default BtnLang;
