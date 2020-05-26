import axios from "axios";

var config = {
  headers: { "Access-Control-Allow-Origin": "*" },
};

export const API = axios.create({
  baseURL: ``,
  config,
  // baseURL: `https://mtr-portfolio.herokuapp.com/api/`,
});

// API.defaults.withCredentials = true;

export const apiStatus = `https://corona.lmao.ninja/v2/all`;
export const apiProvinces = `https://api.coronafull.com/api/v1/corona/country?country=Vietnam`;
export const apiCountries = `https://corona.lmao.ninja/v2/countries`;
export const apiReports = `https://corona.lmao.ninja/v2/historical/all?lastdays=30`;
export const apiNews = `https://api.coronafull.com/api/v1/corona/news?language=vi&fbclid=IwAR04vsKybx4U11NU2LvipAc3tOUQ0sqyC9u1wTL2snEi1T0DvjlxDqhYVkg`;
