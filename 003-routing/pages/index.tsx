import Link from 'next/link'

export default () => {
  return (
    <div>
      <h1>Home</h1>

      <Link href="/other" prefetch={false}>
        <a>Other</a>
      </Link>
    </div>
  )
}
