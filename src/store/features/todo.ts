import { createSlice } from "@reduxjs/toolkit"

interface TodoInitialState {
  id: string
  content: string
  isCompleted: boolean
}

let initialState: TodoInitialState[] = []

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todo: initialState,
  },
  reducers: {
    addTodo: (state: any, action: any) => {
      state.todo = [action.payload, ...state.todo]
    },
    removeTodo(state: any, action: any) {
      state.todo = state.todo.filter(
        (todo: TodoInitialState) => todo.id !== action.payload
      )
    },
    changeTodoCompletedState(state: any, action: any) {
      state.todo = state.todo.map((todo: TodoInitialState) => {
        if (todo.id == action.payload.id) {
          todo.isCompleted = action.payload.checkedState
        }
        return todo
      })
    },
  },
})

export const { addTodo, removeTodo, changeTodoCompletedState } =
  todoSlice.actions
export default todoSlice.reducer
