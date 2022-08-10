import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
      </Head>

      <Header />

      <Navbar />      

    </div>
  )
}

export default Home