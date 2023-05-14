import '@/styles/globals.css'
import 'react-vertical-timeline-component/style.min.css'
import 'react-awesome-button/dist/styles.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Elliot Chin</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
