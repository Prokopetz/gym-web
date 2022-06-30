import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PlaylistContextProvider from '../context/PlaylistContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <PlaylistContextProvider><Component {...pageProps} /></PlaylistContextProvider>
}

export default MyApp
