import React from "react";
import { CountriesItem } from ".";
import { Spinners } from "../../commons";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";

function CountriesList() {
  const data_countries = useSelector((state) => state.countries);
  const isLoading = data_countries.loading;
  let countries = data_countries.countries;
  const keyword = useSelector((state) =>
    state.countries.keyword !== undefined ? state.countries.keyword : ""
  );

  countries = countries.filter((item) => {
    return item.country.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  });

  const List = countries
    .sort((a, b) => b.cases - a.cases)
    .map((item, index) => (
      <CountriesItem key={index} item={item} index={index} />
    ));

  return (
    <>
      {keyword ? (
        <Box mb={2}>
          <Typography variant="subtitle2">
            {countries.length}&nbsp;
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
export default CountriesList;
