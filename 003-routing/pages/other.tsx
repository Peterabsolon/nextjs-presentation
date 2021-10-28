import Link from 'next/link'
import Router from 'next/router'
import { Button } from '@mui/material'

export default () => {
  const goToDynamic = () => {
    Router.push('/dynamic')
  }

  return (
    <div>
      <h1>Other</h1>

      <div>
        <Button variant="contained">Click me</Button>
      </div>

      <div>
        <Link href="/" prefetch={false}>
          <a>Home</a>
        </Link>
      </div>

      <div>
        <button onClick={goToDynamic}>Imperative redirect</button>
      </div>
    </div>
  )
}
