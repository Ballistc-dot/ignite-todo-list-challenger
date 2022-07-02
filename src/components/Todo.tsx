import { useState } from "react"
import { Trash } from "phosphor-react"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
interface TodoProps {
  content: string
  id: string
  onDelete(id: string): void
  onChecked(id: string, checkedState: boolean): void
}

interface Todos {
  content: string
  id: string
  isCompleted: boolean
}
export function Todo({ onDelete, content, onChecked, id }: TodoProps) {
  const todos: Todos[] = useSelector((state: any) => state.todo)

  const storageTodo = todos?.filter((todo: Todos) => todo?.id === id)

  if (!storageTodo[0]) return

  function handleCheck() {
    onChecked(id, !storageTodo[0].isCompleted)
  }
  function handleDelete() {
    onDelete(id)
  }
  const animations = {
    layout: true,
    initial: {
      scale: 1,
      opacity: 0,
    },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0, delay: 0.2 },
    trasition: { stiffness: 200, damping: 40, delay: 0.2 },
  }
  const storageCompleted = storageTodo[0].isCompleted
  return (
    <motion.li
      {...animations}
      className="flex items-start bg-gray-500 max-h-17 rounded p-4 mt-6 justify-between border-gray-400 border"
    >
      <div className="flex gap-4 items-center max-w-[90%] min-h-[2.5rem]">
        <input
          className="bg-transparent ring-2 rounded-lg  ring-blue-300 checked:bg-purple-600 checked:ring-purple-600 hover:bg-blue-400 hover:ring-blue-400 checked:hover:bg-purple-400 checked:hover:ring-purple-400 cursor-pointer"
          type="checkbox"
          checked={storageTodo[0].isCompleted}
          onChange={handleCheck}
        />
        {storageCompleted ? (
          <del className="text-gray-300 text-sm">{content}</del>
        ) : (
          <p className="text-gray-100 text-sm">{content}</p>
        )}
      </div>
      <button
        onClick={handleDelete}
        className="rounded flex items-center justify-center text-gray-300 cursor-pointer w-12 h-12 md:w-8 md:h-8 hover:text-red-200 hover:bg-gray-400 "
      >
        <Trash />
      </button>
    </motion.li>
  )
}
