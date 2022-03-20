import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Layout from '../src/components/Common/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
