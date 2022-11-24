import '../styles/globals.css';
import '../styles/fonts.scss';

import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import Head from 'next/head'

const avenirFont = localFont({
  src: [
    { path: './fonts/Avenir/Avenir-Black.woff2', weight: '900', style: 'normal' },
    { path: './fonts/Avenir/Avenir-BlackOblique.woff2', weight: '900', style: 'italic' },
    { path: './fonts/Avenir/Avenir-Heavy.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Avenir/Avenir-HeavyOblique.woff2', weight: '700', style: 'italic' },
    { path: './fonts/Avenir/Avenir-Medium.woff2', weight: '600', style: 'normal' },
    { path: './fonts/Avenir/Avenir-MediumOblique.woff2', weight: '600', style: 'italic' },
    { path: './fonts/Avenir/Avenir-Roman.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Avenir/Avenir-RomanOblique.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-avenir'
});

const avenirBookFont = localFont({
  src: [
    { path: './fonts/AvenirBook/Avenir-Book.woff2', weight: '400', style: 'normal' },
    { path: './fonts/AvenirBook/Avenir-BookOblique.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-avenir-book'
});

const marcellusFont = localFont({
  src: [
    { path: './fonts/Marcellus/Marcellus-Regular.woff2', weight: '400', style: 'normal' },
  ],
  variable: '--font-marcellus'
});

const rocGroteskFont = localFont({
  src: [
    { path: './fonts/RocGrotesk/RocGrotesk-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/RocGrotesk/RocGrotesk-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-roc-grotesk'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bisbee's —</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="The World's Richest Tournaments" />
        <meta name="keywords" content="bisbees,fishing,gammx" />
        <meta name="author" content="GAMMX" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className={`${avenirFont.variable} ${avenirBookFont.variable} ${marcellusFont.variable} ${rocGroteskFont.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
