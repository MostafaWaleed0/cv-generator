import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header, Footer } from 'components/common';

export default function Container(props: {
  [x: string]: string | React.ReactNode;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { children, ...customMeta } = props;

  const meta = {
    title: 'Free CV Builder Make Your CV Online Quickly - MW',
    description: `It might be difficult to get started when you're doing it all by yourself while creating a curriculum vitae. Let's do better than the competitors and land you the ideal position.`,
    image: 'https://cv-generator-mw.vercel.app/static/favicons/android-chrome-512x512.png',
    ...customMeta
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta name="robots" content="follow, index" />
        <link rel="canonical" href={`https://cv-generator-mw.vercel.app${router.asPath}`} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
