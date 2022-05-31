import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from '../styles/theme'

import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import "swiper/css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    )
}
export default MyApp
