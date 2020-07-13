import Head from 'next/head'
import { Footer, Navbar } from '../component'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <br/>
      </main>

      <Footer />
    </div>
  )
}