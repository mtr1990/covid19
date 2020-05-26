import React, { useState } from "react";
import { TextField, Box, IconButton } from "@material-ui/core";
import { Search, Refresh } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { searchCountries } from "../../redux";
import { useTranslation } from "react-i18next";

function SearchCountries() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const onSearch = () => {
    dispatch(searchCountries(keyword));
  };

  const onReset = () => {
    setKeyword("");
    dispatch(searchCountries());
  };

  const onChange = (ev) => {
    setKeyword(ev.target.value);
  };

  return (
    <>
      <Box my={2} display="flex" alignItems="center">
        <Box position="relative" flexGrow="1">
          <TextField
            autoComplete="off"
            fullWidth
            variant="outlined"
            size="small"
            id="search"
            name="search"
            label={t("action.search")}
            value={keyword}
            onChange={onChange}
          />

          <Box position="absolute" right={5} top={5}>
            <IconButton size="small" aria-label="search" onClick={onSearch}>
              <Search />
            </IconButton>
          </Box>
        </Box>

        <Box ml={1}>
          <IconButton size="small" aria-label="reset" onClick={onReset}>
            <Refresh />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

export default SearchCountries;
