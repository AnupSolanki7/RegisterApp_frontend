import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
