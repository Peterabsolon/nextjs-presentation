import { useState } from 'react'
import Head from 'next/head'

export default () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <Head>
        <title>Custom home title</title>
      </Head>

      <h1>Home</h1>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}
