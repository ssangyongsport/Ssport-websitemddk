import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from 'next-auth/react'

export default function App({
  Component, 
  pageProps: { session, ...pageProps },
}: AppProps) {

  return (
        <div>

        <Head session={session}/>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
            <Footer />
        </div>

  )

}
