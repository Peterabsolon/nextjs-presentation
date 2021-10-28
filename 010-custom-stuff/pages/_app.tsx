import { AppProps } from 'next/dist/shared/lib/router/router'

import './styles.css'

// if (process.browser) {
//   api.init(process.env.NEXT_PUBLIC_API_URL)
// }

// https://nextjs.org/docs/basic-features/layouts#per-page-layouts

function MyApp({ Component }: AppProps) {
  return (
    <div>
      <header>Header</header>
      <Component />
      <footer>Footer</footer>
    </div>
  )
}

export default MyApp
