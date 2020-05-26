import { createSlice } from "@reduxjs/toolkit";
import { API, apiProvinces } from "../configs";

const initialState = {
  loading: false,
  error: "",
  provinces: [],
  keyword: "",
};

const slice = createSlice({
  name: "provinces",
  initialState,
  reducers: {
    // GET PROVINCES
    getProvincesRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getProvincesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        provinces: action.payload,
      };
    },
    getProvincesFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // SEARCH PROVINCES
    searchProvinces: (state, action) => {
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
export const { searchProvinces } = slice.actions;

// Async task
export function getProvinces() {
  return async (dispatch) => {
    dispatch(slice.actions.getProvincesRequest());
    try {
      const response = await API.get(apiProvinces);
      dispatch(slice.actions.getProvincesSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getProvincesFailure(error));
    }
  };
}
