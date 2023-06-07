import { AppProps } from 'next/app'
import Header from "@/components/Header";
import "./global.css"

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}