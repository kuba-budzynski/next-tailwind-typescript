import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import error500 from '../public/error500.svg'

const Error500: NextPage = () => {
  const size = 2100
  return (
    <>
      <Head>
        <title>500 Error</title>
        <meta name="description" content="It seems an error happened. This looks like our fault, try again later" />
        <meta property="og:title" content="500 Error" />
        <meta property="og:description" content="It seems an error happened. This looks like our fault, try again later" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="w-screen h-screen flex justify-center justify-items-center bg-blue-100">
        <div className="w-3/4 max-w-md xxl:max-w-lg xxxl:max-w-xl m-auto flex justify-center justify-items-center">
          <Image src={error500} width={size} height={size} />
        </div>
      </main>
    </>
  )
}

export default Error500
