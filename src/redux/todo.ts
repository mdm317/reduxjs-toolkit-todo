import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

let todoId = 0;
interface Todo{
  id:number
  content:string
}
const initialState:Todo[]=[]
export const todosSlice = createSlice({
  name: "todos",

  initialState,

  // 리듀서 맵
  reducers: {
    addTodo: (state, action:PayloadAction<string>) => {
      todoId++;
      state.push({content:action.payload, id:todoId})
    },

    // 리듀서와 액션 생성자 함수가 분리되어 있지 않다.
    // removeTodo 액션은 파라미터가 payload에 바로 할당된다.
    removeTodo: (state, action:PayloadAction<number>) => {
      state.splice(
        state.findIndex(item => item.id === action.payload),
        1
      );
    }
  }
});

export const selectTodoList = (state:RootState)=>state.todo

export const { addTodo,removeTodo } = todosSlice.actions;

export default todosSlice.reducer;