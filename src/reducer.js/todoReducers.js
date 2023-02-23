import { createSlice } from "@reduxjs/toolkit";
export const todo_add = createSlice({
  name: "todo_add",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
        id: new Date().getTime().toString(),
        data: action.payload.name,
        isedit: false,
        isChecked: false,
      };
      state.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
});
export const { addToDo, deleteToDo } = todo_add.actions;
export default todo_add.reducer;
