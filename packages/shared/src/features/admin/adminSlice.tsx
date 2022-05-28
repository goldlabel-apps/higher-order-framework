import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AdminShape {
  data: any;
}

const initialState: AdminShape = {
  data: {
    shape: "AdminShape",
  },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state.data = { ...state.data, [key]: value };
    },
  },
});

export const { setAdmin } = adminSlice.actions;

export default adminSlice.reducer;
