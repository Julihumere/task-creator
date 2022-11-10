import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
    editTask: (state, action) => {
      const task = action.payload;
      let foundTask = state.find((e) => e.id === task.id);
      if (foundTask) {
        foundTask.title = task.title;
        foundTask.description = task.description;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
