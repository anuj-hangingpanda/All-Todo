import { configureStore } from "@reduxjs/toolkit";
import todoApp from "./todoReducers";
export default configureStore({
  reducer: {
    todo_add: todoApp,
  },
});
