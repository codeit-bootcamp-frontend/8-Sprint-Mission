import { ReactElement } from 'react';
import Layout from '@/layouts/Layout';

export default function Home() {
  return <>hello</>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
