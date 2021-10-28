import { useState } from 'react'

// @ts-ignore
import whatever from './whatever.mdx'

console.log('whatever', whatever)

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
