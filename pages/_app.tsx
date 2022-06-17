import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID as string

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ReactGA.set({ page: url })
      ReactGA.send({ hitType: "pageview", page: url })
    }

    GA_TRACKING_ID && ReactGA.initialize(GA_TRACKING_ID)
    ReactGA.set({ page: router.pathname })
    ReactGA.send({ hitType: "pageview", page: router.pathname })

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return <>
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
