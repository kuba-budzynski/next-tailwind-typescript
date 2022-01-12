import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('common:title')}</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="w-full min-w-screen max-w-full bg-slate-100 h-full min-h-screen flex flex-col justify-center justify-items-center selection:bg-rose-400 selection:text-rose-100 selection:no-underline">
        <h1 className="text-rose-400 font-extrabold text-7xl underline decoration-rose-200 mx-auto px-8 ">Hello World</h1>
      </div>
    </>
  )
}

export default Home
