import { useState } from 'react'
import styles from './index.module.css'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className={styles.hello}>Home</h1>
      <div className="counter">Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <style jsx>
        {`
          .counter {
            color: blue;
          }
        `}
      </style>
    </div>
  )
}
