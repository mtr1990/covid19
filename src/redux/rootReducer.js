import { combineReducers } from "redux";
import countriesReducer from "./countries-slice";
import provincesReducer from "./provinces-slice";
import newsReducer from "./news-slice";
import statusReducer from "./status-slice";
import reportsReducer from "./reports-slice";

const rootReducer = combineReducers({
  countries: countriesReducer,
  provinces: provincesReducer,
  news: newsReducer,
  status: statusReducer,
  reports: reportsReducer,
});

export default rootReducer;
