import { createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = localStorage.getItem("register_app");
const isUser = JSON.parse(data || null);

const initialState: any = {
  user: isUser || null,
  userLogout: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state: any, action: any) => {
      console.log('here');
      
      localStorage.setItem("register_app", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    usersLogout: (state: any) => {
      state.userLogout = !state.userLogout;
      localStorage.removeItem("register_app");
      state.user = null;
    },
  },
});

export const { userLogin, usersLogout } = userSlice.actions;

export default userSlice.reducer;