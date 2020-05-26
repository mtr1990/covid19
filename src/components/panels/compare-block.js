import React from "react";
import { Typography, Box } from "@material-ui/core";
import { useTranslation, Trans } from "react-i18next";
import { ArrowUpward } from "@material-ui/icons";
import { FormatNumber } from "../../utilities";

function CompareBlock(props) {
  useTranslation();

  return (
    <Box {...props}>
      <Box className="block-total">
        <Typography variant="subtitle2">
          <Trans i18nKey={`label.${props.label}`} />
        </Typography>
        <Typography variant="h5">
          {isNaN(props.total) ? "0..." : FormatNumber(props.total)}
        </Typography>
      </Box>

      <Box className="block-today">
        <Typography variant="subtitle2">
          <Trans i18nKey="label.today" />
        </Typography>

        <Box display="flex">
          <ArrowUpward fontSize="small" />
          <Typography variant="subtitle2">
            {FormatNumber(props.result)}&nbsp;(
            {isNaN(props.percent) ? "0.00.." : props.percent}
            %)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CompareBlock;
