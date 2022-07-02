import { Header } from "./components/Header"
import "./main.css"
import { CreateTodoForm } from "./components/CreateTodoForm"
import { Clipboard } from "./components/Clipboard"
import { Todo } from "./components/Todo"
import { AnimatePresence, motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import {
  addTodo,
  changeTodoCompletedState,
  removeTodo,
} from "./store/features/todo"

interface Todos {
  content: string
  id: string
  isCompleted: boolean
}

function App() {
  const todos: Todos[] | undefined = useSelector((state: any) => state.todo)

  const dispatch = useDispatch()

  function handleCreateNewTodo(todo: Todos) {
    dispatch(addTodo(todo))
  }

  function handleSetChecked(id: string, checkedState: boolean) {
    dispatch(changeTodoCompletedState({ id, checkedState }))
  }

  function deleteTodo(id: string) {
    dispatch(removeTodo(id))
  }

  const finishedTodos =
    todos?.filter((todo) => todo?.isCompleted == true).length ?? 0

  return (
    <div>
      <Header />
      <div className="flex flex-1 items-center flex-col md:w-[100%] px-1">
        <CreateTodoForm onCreateNewTodo={handleCreateNewTodo} />
        <main className="flex flex-1 items-center flex-col w-[100%] md:w-[736px]  mt-16">
          <div className="w-[100%]">
            <header className="font-bold text-sm flex flex-1 flex-row justify-between">
              <div className="flex gap-2 items-center ">
                <span className="text-blue-300">Tarefas Criadas</span>
                <span className="text-gray-200 bg-gray-400 roundedbg-gray-400 rounded-[18px] w-6 text-center h-4 flex justify-center items-center">
                  {todos?.length}
                </span>
              </div>
              <div className="flex gap-2 items-center ">
                <span className="text-purple-400">Concluídas</span>
                <span className="flex-row text-gray-200 bg-gray-400 roundedbg-gray-400 rounded-[18px] w-auto text-center h-4 flex justify-center items-center p-2">
                  {finishedTodos} de {todos?.length}
                </span>
              </div>
            </header>
            {todos && todos?.length > 0 ? (
              <ul className="flex flex-1 flex-col gap-3 h-auto">
                <AnimatePresence>
                  {todos?.map((todo) => {
                    return (
                      <Todo
                        key={todo.id}
                        id={todo.id}
                        onDelete={deleteTodo}
                        content={todo.content}
                        onChecked={handleSetChecked}
                      />
                    )
                  })}
                </AnimatePresence>
              </ul>
            ) : (
              <div className="border-t-[1px] border-gray-400 rounded-lg mt-6 text-base text-gray-300 flex flex-1 flex-col items-center h-61 justify-center w-[100%] ">
                <Clipboard className="mb-5" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
