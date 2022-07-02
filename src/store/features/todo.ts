import { createSlice } from "@reduxjs/toolkit"

interface TodoInitialState {
  id: string
  content: string
  isCompleted: boolean
}

let initialState: TodoInitialState[] = []

export const userSlice = createSlice({
  name: "todos",
  initialState: { todo: initialState },
  reducers: {
    addTodo: (state: any, action: any) => {
      console.log(action)
      state.todo.push(action.payload)
    },
    removeTodo(state: any, action: any) {
      state.todo = state.todo.filter(
        (todo: TodoInitialState) => todo.id !== action.payload
      )
    },
    changeTodoCompletedState(state: any, action: any) {
      console.log(action.payload)
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
  userSlice.actions
export default userSlice.reducer
