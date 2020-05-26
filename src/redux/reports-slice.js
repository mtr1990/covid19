import { createSlice } from "@reduxjs/toolkit";
import { API, apiReports } from "../configs";

const initialState = {
  loading: false,
  error: "",
  reports: [],
};

const slice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    getReportsRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getReportsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        reports: action.payload,
      };
    },
    getReportsFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

// Reducer
export default slice.reducer;

// Async task
export function getReports() {
  return async (dispatch) => {
    dispatch(slice.actions.getReportsRequest());
    try {
      const response = await API.get(apiReports);

      let reports = response.data;
      const report_date = Object.keys(reports.cases);
      const report_cases = Object.values(reports.cases);
      const report_recovered = Object.values(reports.recovered);
      const report_deaths = Object.values(reports.deaths);

      reports = report_date.map((time, item) => ({
        date: time,
        cases: report_cases[item],
        recovered: report_recovered[item],
        deaths: report_deaths[item],
      }));

      dispatch(slice.actions.getReportsSuccess(reports));
    } catch (error) {
      dispatch(slice.actions.getReportsFailure(error));
    }
  };
}
