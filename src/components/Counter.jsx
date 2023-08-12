import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)

  return (
    <div>
      current:{ count }
      <button onClick={increment}>count up</button>
    </div>
  )
}