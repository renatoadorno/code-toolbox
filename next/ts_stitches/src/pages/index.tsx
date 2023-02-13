import Head from 'next/head';

// SSG - STATIC SITE GENERATION - use "getStaticProps: GetStaticProps"
// SSR - SERVER SIDE RENDERING - use "getServerSideProps: GetServerSideProps"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | New App</title>
      </Head>

      <main>
        <h1>👏 New App</h1>
      </main>
    </>
  );
}
