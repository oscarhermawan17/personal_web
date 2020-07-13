import Head from 'next/head'
import { Footer, Navbar, Content } from '../component'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Content page={'read'}/>
      </main>
      <Footer />
    </>
  )
}