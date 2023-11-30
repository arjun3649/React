import { createSlice, nanoid } from "@reduxjs/toolkit";

// this is the initial state
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // this is what v will be accessing everywhere
  reducers: {
    // every function gets two parameters state,action
    // in state v get updated value in the store
    //action v get action.payload 
    addTodo: (state, action) => {
      const todo = {
        //action is term used for what
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
