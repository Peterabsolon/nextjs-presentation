import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()

  console.log('router', router)

  return <div>Product page {router.query.id}</div>
}
