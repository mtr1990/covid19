import { createSlice } from "@reduxjs/toolkit";
import { API, apiCountries } from "../configs";

const initialState = {
  loading: false,
  error: "",
  countries: [],
  keyword: "",
};

const slice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    // GET PROVINCES
    getCountriesRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getCountriesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    },
    getCountriesFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // SEARCH PROVINCES
    searchCountries: (state, action) => {
      return {
        ...state,
        keyword: action.payload,
      };
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { searchCountries } = slice.actions;

// Async task
export function getCountries() {
  return async (dispatch) => {
    dispatch(slice.actions.getCountriesRequest());
    try {
      const response = await API.get(apiCountries);
      dispatch(slice.actions.getCountriesSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.getCountriesFailure(error));
    }
  };
}
