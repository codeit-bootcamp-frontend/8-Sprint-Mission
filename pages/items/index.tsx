import { ReactElement } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Layout from "@/pages/layout";

const DynamicBestItems = dynamic(() => import("@/components/items/best"), {
  ssr: false,
});
const DynamicTotalItems = dynamic(() => import("@/components/items/total"), {
  ssr: false,
});

export default function Items() {
  return (
    <>
      <Head>
        <title>판다마켓 - 중고마켓</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <DynamicBestItems />
        <DynamicTotalItems />
      </main>
    </>
  );
}

Items.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
