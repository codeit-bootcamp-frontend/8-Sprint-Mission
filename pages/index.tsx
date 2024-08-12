import { ReactElement, useEffect } from 'react';
import Layout from '@/layouts/Layout';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/boards`);
  }, [router]);
  return <>hello</>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
