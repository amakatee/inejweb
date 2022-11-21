
import '../sass/style.scss'
import { AnimationContext } from '../context/AnimationContext'
function MyApp({ Component, pageProps }) {
  return <AnimationContext>
    <Component {...pageProps} />
  </AnimationContext>
}

export default MyApp


