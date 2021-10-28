import { useState } from 'react'

export default () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <h1>Home</h1>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}
