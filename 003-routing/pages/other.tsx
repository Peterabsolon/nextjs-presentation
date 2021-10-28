import Link from 'next/link'
import { Button } from '@mui/material'

export default () => {
  return (
    <div>
      <h1>Other</h1>

      <div>
        <Button variant="contained">Click me</Button>
      </div>

      <Link href="/" prefetch={false}>
        <a>Home</a>
      </Link>
    </div>
  )
}
