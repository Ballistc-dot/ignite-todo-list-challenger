import { Logo } from "./Logo"

export function Header() {
  return (
    <header className="flex flex-1 items-center justify-center bg-gray-700 h-[200px]">
      <Logo />
    </header>
  )
}
