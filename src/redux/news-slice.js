import { createSlice } from "@reduxjs/toolkit";
import { API, apiNews } from "../configs";

const initialState = {
  loading: false,
  error: "",
  news: [],
};

const slice = createSlice({
  name: "news",
  initialState,
  reducers: {
    // GET PROVINCES
    getNewsRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getNewsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        news: action.payload,
      };
    },
    getNewsFailure: (state, action) => {
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
export function getNews() {
  return async (dispatch) => {
    dispatch(slice.actions.getNewsRequest());
    try {
      const response = await API.get(apiNews);
      dispatch(slice.actions.getNewsSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getNewsFailure(error));
    }
  };
}
