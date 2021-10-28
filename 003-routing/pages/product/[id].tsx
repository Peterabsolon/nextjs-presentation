import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()

  return <div>Product page {router.query.id}</div>
}
