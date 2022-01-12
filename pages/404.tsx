import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import error404 from '../public/error404.svg'

const Error404: NextPage = () => {
  const size = 2012
  return (
    <>
      <Head>
        <title>404 Error</title>
        <meta name="description" content="It seems an error happened. This looks like your fault, try again!" />
        <meta property="og:title" content="404 Error" />
        <meta property="og:description" content="It seems an error happened. This looks like your fault, try again!" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="w-screen h-screen flex justify-center justify-items-center bg-red-50">
        <div className="w-3/4 max-w-md xxl:max-w-lg xxxl:max-w-xl m-auto flex justify-center justify-items-center">
          <Image src={error404} width={size} height={size} />
        </div>
      </main>
    </>
  )
}

export default Error404
