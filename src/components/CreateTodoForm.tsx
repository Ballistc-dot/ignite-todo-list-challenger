import { ChangeEvent, useState } from "react"
import { PlusCircle } from "phosphor-react"
import { v4 } from "uuid"

interface Todo {
  id: string
  content: string
  isCompleted: false
}

interface CreateTodoFormProps {
  onCreateNewTodo(todo: Todo): void
}

export function CreateTodoForm({ onCreateNewTodo }: CreateTodoFormProps) {
  const [todoContent, setTodoContent] = useState("")

  function handleTodoContentChange(event: ChangeEvent<HTMLInputElement>) {
    setTodoContent(event.target.value)
  }
  function onSubmit() {
    event?.preventDefault()
    const todo: Todo = {
      id: v4(),
      content: todoContent,
      isCompleted: false,
    }
    onCreateNewTodo(todo)
    setTodoContent("")
  }
  const haveTodoContent = todoContent.length === 0
  return (
    <form
      className="my-[-30px] h-12 w-[100%] flex flex-row items-center justify-around md:w-50 md:h-14"
      onSubmit={onSubmit}
    >
      <input
        className="text-gray-100 w-[75%] h-[100%] rounded p-6 bg-gray-500 placeholder:text-gray-300 md:w-[39.875rem] md:h-14 border border-gray-700 drop-shadow-md"
        placeholder="Adicione uma nova tarefa"
        required
        value={todoContent}
        onChange={handleTodoContentChange}
      />

      <button
        disabled={haveTodoContent}
        className="ml-1 p-1 h-[100%] bg-blue-400 w-[25%] rounded h-26 flex flex-row items-center justify-center gap-2 font-bold text-gray-100 md:w-5 md:h-14 md:mt-0 disabled:opacity-70 disabled:cursor-not-allowed"
        type="submit"
      >
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  )
}
