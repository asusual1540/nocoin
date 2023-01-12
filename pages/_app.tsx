import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";

import helixStore from "../src/helixStore"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={helixStore}>
      <Component {...pageProps} />
    </Provider>
  )
}
