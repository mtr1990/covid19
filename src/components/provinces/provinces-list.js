import React from "react";
import { ProvincesItem } from ".";
import { Spinners } from "../../commons";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import { removeAccents } from "../../utilities";

function ProvincesList() {
  const data_province = useSelector((state) => state.provinces);
  const isLoading = data_province.loading;
  let provinces = data_province.provinces;

  const keyword = useSelector((state) =>
    state.provinces.keyword !== undefined ? state.provinces.keyword : ""
  );

  provinces = provinces.filter((item) => {
    return (
      removeAccents(item.city).toLowerCase().indexOf(keyword.toLowerCase()) !==
      -1
    );
  });

  const List = provinces
    .sort((a, b) => b.confirmed - a.confirmed)
    .map((item, index) => (
      <ProvincesItem key={item.id} item={item} index={index} />
    ));

  return (
    <>
      {keyword ? (
        <Box mb={2}>
          <Typography variant="subtitle2">
            {provinces.length}&nbsp;
            <Typography
              variant="subtitle2"
              color="textSecondary"
              component="span"
            >
              results found "{keyword}"
            </Typography>
          </Typography>
        </Box>
      ) : null}

      {isLoading ? <Spinners /> : List}
    </>
  );
}
export default ProvincesList;
