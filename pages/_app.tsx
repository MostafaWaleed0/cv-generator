import localFont from '@next/font/local';
import type { AppProps } from 'next/app';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/global.css';
import '../styles/resume-style.css';

const ppNeueMontreal = localFont({
  src: [
    {
      path: '../public/fonts/false-regular.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/false-semibold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/fonts/satoshi-medium.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-body'
});

const robotoMono = localFont({
  src: [
    {
      path: '../public/fonts/robotoMono-regular.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-mono'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${robotoMono.variable} ${ppNeueMontreal.variable} font-sans flex flex-col min-h-screen`}
      id="main-content"
      tabIndex={-1}
    >
      <Component {...pageProps} />
    </main>
  );
}
