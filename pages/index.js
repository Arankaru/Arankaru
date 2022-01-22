import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BakaTsugu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hello!" />
        <p className="description">
          Add my discord lmaonade#3570
        </p>
      </main>

      <Footer />
    </div>
  )
}
