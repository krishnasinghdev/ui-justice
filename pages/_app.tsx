import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Justice.</title>
        <meta
          name='description'
          content='Justice Website for Advocates and Law Firms.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
