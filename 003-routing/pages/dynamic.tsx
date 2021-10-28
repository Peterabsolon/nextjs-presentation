import { useState } from 'react'
import dynamic from 'next/dynamic'

const Input = dynamic(() => import('../components/Input'))

export default () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div>
      <button onClick={() => setLoaded(true)}>load input</button>

      {loaded && <Input />}
    </div>
  )
}
