import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
    loading: false,
    success: false,
    error: null,
  },

  reducers: {
    setLoginLoading(state) {
      state.loading = true;
      state.success = false;
      state.error = null;
    },

    setLoginFail(state) {
      state.success = false;
      state.loading = false;
      state.user = {};
    },

    setCurrentUser(state, action) {
      state.loading = false;
      state.error = null;
      state.success = true;
      state.currentUser = action.payload.user;
    },
  },
});

export const { setLoginLoading, setLoginFail, setCurrentUser } =
  userSlice.actions;
export default userSlice.reducer;
