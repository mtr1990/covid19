import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@material-ui/core";
import { Header } from "../commons";
import { img404 } from "../assets";

const NoMatchPage = () => (
  <>
    {/********** COMMONS ***********/}
    <Header />
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100vh"
    >
      <Typography variant="h1"> Opp!</Typography>

      <Box my={8}>
        <img src={img404} className="nomatch-img" alt="Page not found.." />
      </Box>

      <Typography variant="body1" gutterBottom>
        The Page You Requested Could Not Be Found.
      </Typography>

      <Button component={Link} to="/" color="primary">
        Back to home
      </Button>
    </Box>
  </>
);

export default NoMatchPage;
