import { createSlice } from "@reduxjs/toolkit";
import { API, apiStatus } from "../configs";

const initialState = {
  loading: false,
  error: "",
  status: {},
};

const slice = createSlice({
  name: "status",
  initialState,
  reducers: {
    getStatusRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getStatusSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload,
      };
    },
    getStatusFailure: (state, action) => {
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
export function getStatus() {
  return async (dispatch) => {
    dispatch(slice.actions.getStatusRequest());
    try {
      const response = await API.get(apiStatus);
      dispatch(slice.actions.getStatusSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.getStatusFailure(error));
    }
  };
}
