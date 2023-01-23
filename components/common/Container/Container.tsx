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
    title: '',
    description: ``,
    image: '',
    ...customMeta
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{meta.title}</title>
        <link rel="canonical" href={`https://www..${router.asPath}`} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
