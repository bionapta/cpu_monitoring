import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import PageTransition from '../components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../app/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={router.route}>
          <Component {...pageProps} />
          <GoogleAnalytics trackPageViews />
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
