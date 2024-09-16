import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "first",
  initialState: {
    height: false,
    active: '"',
    openMobile: false,
  },
  reducers: {
    checkScrollAction: (state, action) => {
      state.height = action.payload;
    },
    checkActiveLink: (state, action) => {
      state.active = action.payload;
    },
    openMobileAction: (state, action) => {
      state.openMobile = action.payload;
    },
  },
});

// export

export const { checkScrollAction, checkActiveLink, openMobileAction } =
  Slice.actions;
export default Slice.reducer;
