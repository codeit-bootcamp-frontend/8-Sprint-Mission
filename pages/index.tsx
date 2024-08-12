import Head from 'next/head';
import styles from '@/src/styles/Home.module.scss';
import { getArticles } from '@/src/lib/api/articleApi';

export default function Home() {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <meta name="description" content="판다 마켓" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>Home</main>
    </>
  );
}
